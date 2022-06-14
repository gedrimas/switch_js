import {IShipper, OunceCharge, ShipperItemKinds, isOversize} from './utils'

export class AirEastShipper implements IShipper {

    private itemWeight: number
    private readonly rate: number = OunceCharge.AIR_EAST
    private Kind: ShipperItemKinds

    constructor(wight: number, kind: ShipperItemKinds){
        this.itemWeight = wight
        this.Kind = kind
        this.rate = new kind().getAirEastShipperRate()
    }

    getCost() {
        if(isOversize(this.Kind)){
            return this.rate * this.itemWeight + this.Kind.oversizeAirEast
        }
        return this.rate * this.itemWeight
    }
}