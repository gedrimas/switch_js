import Shipment, {MarkedShipment} from './Shipment'
import { mockItem } from './mock'

export interface ShipmentItem {
    shipmentId?: number
    toAddress: string
    fromAddress: string
    toZipCode: string
    fromZipCode: string
    weight: number
    marks?: string[] 
}

class Client implements ShipmentItem {
     shipmentId?: number
     toAddress: string
     fromAddress: string
     toZipCode: string
     fromZipCode: string
     weight: number
     marks?: string[]

    
    constructor(shipmentItem: ShipmentItem){
        const {
            shipmentId,
            toAddress,
            fromAddress,
            toZipCode,
            fromZipCode,
            weight,
            marks 
        } = shipmentItem

        this.shipmentId = shipmentId
        this.toAddress = toAddress
        this.fromAddress = fromAddress
        this.toZipCode = toZipCode
        this.fromZipCode = fromZipCode
        this.weight = weight
        this.marks = marks 

    }

    onShip(shipment: typeof Shipment): void {

        const shipmentItem = new shipment(this)
        const markedShipment = new MarkedShipment(shipmentItem)
        markedShipment.ship()
        //new shipment(this).ship()
    }
}


new Client(mockItem).onShip(Shipment)
new Client(mockItem).onShip(Shipment)
new Client(mockItem).onShip(Shipment)
