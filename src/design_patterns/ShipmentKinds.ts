export interface IShipmentKinds {
    getAirEastShipperRate: (weight?: number) => number
    getChicagoSprintShipperRate: (weight?: number) => number
    getPacificParcelShipperRate: (weight?: number) => number
}

enum ShipmentKindsCompaniesRates {
    LETTER_AIR_EAST = 0.39,
    PACKAGE_AIR_EAST = 0.25,
    OVERSIZE_AIR_EAST = 10,
    STANDARD_AIR_EAST = 0.39,
    
    LETTER_CHICAGO = 0.42,
    PACKAGE_CHICAGO = 0.20,
    OVERSIZE_CHICAGO = 0,

    LETTER_PACIFIC = 0.51,
    PACKAGE_PACIFIC = 0.19,
    OVERSOZE_PACIFIC = 0.2,
    STANDARD_PACIFIC = 0.51

}

export class Letter implements IShipmentKinds{

    getAirEastShipperRate(){
        return ShipmentKindsCompaniesRates.LETTER_AIR_EAST
    }
    
    getChicagoSprintShipperRate(){
        return ShipmentKindsCompaniesRates.LETTER_CHICAGO
    }

    getPacificParcelShipperRate() {
        return ShipmentKindsCompaniesRates.LETTER_PACIFIC
    }
}

export class Package implements IShipmentKinds{
    getAirEastShipperRate(){
        return ShipmentKindsCompaniesRates.PACKAGE_AIR_EAST
    }
    
    getChicagoSprintShipperRate(){
        return ShipmentKindsCompaniesRates.PACKAGE_CHICAGO
    }

    getPacificParcelShipperRate() {
        return ShipmentKindsCompaniesRates.PACKAGE_PACIFIC
    }
}

export class Oversize implements IShipmentKinds{

    static oversizeAirEast = 10
    static oversizeChicago = 0
    static oversizePacific = 0.2


    getAirEastShipperRate(){
        return ShipmentKindsCompaniesRates.STANDARD_AIR_EAST
    }
    
    getChicagoSprintShipperRate(){
        return 0
    }

    getPacificParcelShipperRate() {
        return ShipmentKindsCompaniesRates.STANDARD_PACIFIC
    }
}

export class ShipentKinds {

    weight: number
    
    constructor(weight: number) {
        this.weight = weight
    }

    getShipmentItemKindBaseOnWeight() {
        if(this.weight <= 15) return Letter
        if(this.weight > 15 && this.weight <= 160) return Package
        if(this.weight > 160) return Oversize

    }
}