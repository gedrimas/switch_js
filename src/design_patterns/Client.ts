import {Shipment, MarkedShipment, ShipmentItem} from './Shipment'
import { Gui } from './Gui'

class Client {
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


const item = new Gui(
    150,
    '55555',
    '11111',
    'Mockingbird Lane, Tulsa',
    '4th Ave SE, Bellevue, Wa 92021',
    undefined,
    ['Fragile', 'Do Not Leave', 'Return Receipt Requested']
    ) 


new Client(item).onShip(Shipment)
new Client(item).onShip(Shipment)
new Client(item).onShip(Shipment)
