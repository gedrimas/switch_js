import { ShipentKinds} from '../ShipmentKinds'
import {AirEastShipper} from './AirEastShipper'
import {ChicagoSprintShipper} from './ChicagoSprintShipper'
import {PacificParcelShipper} from './PacificParcelShipper'
import {IShipper} from './utils'


export default class Shipper {
    
    private shiper: IShipper
    private weight: number
    private zipCode: string

    constructor(weight: number, zipCode: string){
        this.weight = weight
        this.zipCode = zipCode
    }

    private choseShiper(): IShipper {
        const shipmentKind = new ShipentKinds(this.weight).getShipmentItemKindBaseOnWeight()

        switch(this.zipCode.charAt(0)) {
            case '1':
            case '2':
            case '3':
                return new AirEastShipper(this.weight, shipmentKind)
            case '4':
            case '5':
            case '6':
                return new ChicagoSprintShipper(this.weight, shipmentKind)
            case '7':
            case '8':
            case '9':
                return new PacificParcelShipper(this.weight, shipmentKind)
        }
    }

    getCost(){
        return this.choseShiper().getCost()
    }
}