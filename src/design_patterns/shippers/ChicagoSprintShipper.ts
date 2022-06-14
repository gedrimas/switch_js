import {IShipper, OunceCharge, ShipperItemKinds, isOversize} from './utils'

export class ChicagoSprintShipper implements IShipper {

    private itemWeight: number
    private readonly rate: number = OunceCharge.AIR_EAST
    private Kind: ShipperItemKinds

    constructor(wight: number, kind: ShipperItemKinds){
        this.itemWeight = wight
        this.Kind = kind
        this.rate = new kind().getChicagoSprintShipperRate()
    }

    getCost() {
        if(isOversize(this.Kind)){
            return this.Kind.oversizeChicago
        }
        return this.rate * this.itemWeight
    }
}