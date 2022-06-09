import ShipentKinds, {IShipmentKinds, Letter, Package, Oversize} from './ShipmentKinds'


interface IShipper {
    getCost(): number
}

enum Reates {
    AIR_EAST = 0.39,
    CHICAGO = 0.42, 
    PACIFIC_PARCEL = 0.51
}

type ShipperItemKinds = typeof Letter | typeof Package | typeof Oversize

const isOversize = (itemKind: ShipperItemKinds): itemKind is typeof Oversize => {
    return !!(itemKind as typeof Oversize).oversizeAirEast
}

export class AirEastShipper implements IShipper {

    private itemWeight: number
    private readonly rate: number = Reates.AIR_EAST
    private kind: ShipperItemKinds

    constructor(wight: number, kind: ShipperItemKinds){
        this.itemWeight = wight
        this.kind = kind
        this.rate = new kind().getAirEastShipperRate()
    }

    getCost() {
        if(isOversize(this.kind)){
            return this.rate * this.itemWeight + this.kind.oversizeAirEast
        }
        return this.rate * this.itemWeight
    }
}

export class ChicagoSprintShipper implements IShipper {

    private itemWeight: number
    private readonly rate: number = Reates.AIR_EAST
    private kind: ShipperItemKinds

    constructor(wight: number, kind: ShipperItemKinds){
        this.itemWeight = wight
        this.kind = kind
        this.rate = new kind().getChicagoSprintShipperRate()
    }

    getCost() {
        if(isOversize(this.kind)){
            return this.kind.oversizeChicago
        }
        return this.rate * this.itemWeight
    }
}

export class PacificParcelShipper implements IShipper {

    private itemWeight: number
    private readonly rate: number = Reates.AIR_EAST
    private kind: ShipperItemKinds

    constructor(wight: number, kind: ShipperItemKinds){
        this.itemWeight = wight
        this.kind = kind
        this.rate = new kind().getPacificParcelShipperRate()
    }

    getCost() {
        if(isOversize(this.kind)){
            return this.rate * this.itemWeight * this.kind.oversizePacific
        }
        return this.rate * this.itemWeight
    }
}

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