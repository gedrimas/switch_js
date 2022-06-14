import {Letter, Package, Oversize} from '../ShipmentKinds'

export interface IShipper {
    getCost(): number
}

export enum OunceCharge {
    AIR_EAST = 0.39,
    CHICAGO = 0.42, 
    PACIFIC_PARCEL = 0.51
}

export type ShipperItemKinds = typeof Letter | typeof Package | typeof Oversize

export const isOversize = (itemKind: ShipperItemKinds): itemKind is typeof Oversize => {
    return !!(itemKind as typeof Oversize).oversizeAirEast
}