import {IShipper, OunceCharge, ShipperItemKinds, isOversize} from './utils'

export class PacificParcelShipper implements IShipper {

    private itemWeight: number
    private readonly rate: number = OunceCharge.AIR_EAST
    private Kind: ShipperItemKinds

    constructor(wight: number, kind: ShipperItemKinds){
        this.itemWeight = wight
        this.Kind = kind
        this.rate = new kind().getPacificParcelShipperRate()
    }

    getCost() {
        if(isOversize(this.Kind)){
            return this.rate * this.itemWeight * this.Kind.oversizePacific
        }
        return this.rate * this.itemWeight
    }
}