import Shipper from './Shipper'

export interface ShipmentItem {
    shipmentId?: number
    toAddress: string
    fromAddress: string
    toZipCode: string
    fromZipCode: string
    weight: number
    marks?: string[] 
}


export class Shipment implements ShipmentItem {

    shipmentId?: number
    toAddress: string
    fromAddress: string
    toZipCode: string
    fromZipCode: string
    weight: number
    marks?: string[]
    
    static sId: number = 0

    constructor( item: ShipmentItem) {
        const {
            toAddress,
            fromAddress,
            toZipCode,
            fromZipCode,
            weight,
            marks,
            shipmentId 
        } = item

        this.shipmentId = shipmentId
        this.toAddress = toAddress
        this.fromAddress = fromAddress
        this.toZipCode = toZipCode
        this.fromZipCode = fromZipCode
        this.weight = weight
        this.marks = marks 
    }
    
     getShipmentId() {
        if(this.shipmentId) return this.shipmentId
        
        if(Shipment.sId === 0) {
            return Shipment.sId = 1
        }else{
            return Shipment.sId += 1
        }
    }

     getShipmentCost(): number {
        const cost = new Shipper(this.weight, this.toZipCode).getCost()
        return Number(cost.toFixed(2))
    }

    public ship(): string {
        const shipment = 
            `Shipment with the ID ${this.getShipmentId()} will be picked up from ${this.fromZipCode} ${this.fromAddress} 
            and shipped to ${this.fromZipCode} ${this.toAddress}, OK 67721
                Cost = ${this.getShipmentCost()}`
        console.log(shipment);
        return shipment
    }
}

export class ShipmentDecorator implements ShipmentItem{
    shipmentId?: number
    toAddress: string
    fromAddress: string
    toZipCode: string
    fromZipCode: string
    weight: number
    marks?: string[]
    static sId: number = 0

    protected wrappee: Shipment

    constructor(shipmentItem: Shipment) {
        this.wrappee = shipmentItem

        this.shipmentId = this.wrappee.shipmentId
        this.toAddress = this.wrappee.toAddress
        this.fromAddress = this.wrappee.fromAddress
        this.toZipCode = this.wrappee.toZipCode
        this.fromZipCode = this.wrappee.fromZipCode
        this.weight = this.wrappee.weight
        this.marks = this.wrappee.marks 
    }

    private getShipmentId() {
        if(this.wrappee.shipmentId) return this.wrappee.shipmentId
        
        if(ShipmentDecorator.sId === 0) {
            return ShipmentDecorator.sId = 1
        }else{
            return ShipmentDecorator.sId += 1
        }
    }

    private getShipmentCost(): number {
        const cost = new Shipper(this.wrappee.weight, this.wrappee.toZipCode).getCost()
        return Number(cost.toFixed(2))
    }

    public ship(): string {
        const shipment = 
            `Shipment with the ID ${this.wrappee.getShipmentId()} will be picked up from ${this.wrappee.fromZipCode} ${this.wrappee.fromAddress} 
            and shipped to ${this.wrappee.fromZipCode} ${this.wrappee.toAddress}, OK 67721
                Cost = ${this.wrappee.getShipmentCost()}`
        console.log(shipment);
        return shipment
    }
}

export class MarkedShipment extends ShipmentDecorator {

    private getMarks(): string {

        const shipmentMarks = {
            Fragile: '**MARK FRAGILE**',
            ['Do Not Leave']: '**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**',
            ['Return Receipt Requested']: '**MARK RETURN RECEIPT REQUESTED**'
        }

        const [fragile, doNot, returnReceipt] = this.wrappee.marks

        return `
        ${shipmentMarks[fragile]} 
        ${shipmentMarks[doNot]}
        ${shipmentMarks[returnReceipt]}
        `
    }

    public ship(): string {
        const shipment = 
        `Shipment with the ID ${this.wrappee.getShipmentId()} will be picked up from ${this.wrappee.fromZipCode} ${this.wrappee.fromAddress} 
        and shipped to ${this.wrappee.toZipCode} ${this.wrappee.toAddress}, OK 67721
        Cost = ${this.wrappee.getShipmentCost()} 
            ${this.getMarks()}
            `
    console.log(shipment);
    return shipment
    }
}