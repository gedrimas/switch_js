"use strict";
exports.__esModule = true;
exports.PacificParcelShipper = exports.ChicagoSprintShipper = exports.AirEastShipper = void 0;
var ShipmentKinds_1 = require("./ShipmentKinds");
var Reates;
(function (Reates) {
    Reates[Reates["AIR_EAST"] = 0.39] = "AIR_EAST";
    Reates[Reates["CHICAGO"] = 0.42] = "CHICAGO";
    Reates[Reates["PACIFIC_PARCEL"] = 0.51] = "PACIFIC_PARCEL";
})(Reates || (Reates = {}));
var isOversize = function (itemKind) {
    return !!itemKind.oversizeAirEast;
};
var AirEastShipper = /** @class */ (function () {
    function AirEastShipper(wight, kind) {
        this.rate = Reates.AIR_EAST;
        this.itemWeight = wight;
        this.kind = kind;
        this.rate = new kind().getAirEastShipperRate();
    }
    AirEastShipper.prototype.getCost = function () {
        if (isOversize(this.kind)) {
            return this.rate * this.itemWeight + this.kind.oversizeAirEast;
        }
        return this.rate * this.itemWeight;
    };
    return AirEastShipper;
}());
exports.AirEastShipper = AirEastShipper;
var ChicagoSprintShipper = /** @class */ (function () {
    function ChicagoSprintShipper(wight, kind) {
        this.rate = Reates.AIR_EAST;
        this.itemWeight = wight;
        this.kind = kind;
        this.rate = new kind().getChicagoSprintShipperRate();
    }
    ChicagoSprintShipper.prototype.getCost = function () {
        if (isOversize(this.kind)) {
            return this.kind.oversizeChicago;
        }
        return this.rate * this.itemWeight;
    };
    return ChicagoSprintShipper;
}());
exports.ChicagoSprintShipper = ChicagoSprintShipper;
var PacificParcelShipper = /** @class */ (function () {
    function PacificParcelShipper(wight, kind) {
        this.rate = Reates.AIR_EAST;
        this.itemWeight = wight;
        this.kind = kind;
        this.rate = new kind().getPacificParcelShipperRate();
    }
    PacificParcelShipper.prototype.getCost = function () {
        if (isOversize(this.kind)) {
            return this.rate * this.itemWeight * this.kind.oversizePacific;
        }
        return this.rate * this.itemWeight;
    };
    return PacificParcelShipper;
}());
exports.PacificParcelShipper = PacificParcelShipper;
var Shipper = /** @class */ (function () {
    function Shipper(weight, zipCode) {
        this.weight = weight;
        this.zipCode = zipCode;
    }
    Shipper.prototype.choseShiper = function () {
        var shipmentKind = new ShipmentKinds_1["default"](this.weight).getShipmentItemKindBaseOnWeight();
        switch (this.zipCode.charAt(0)) {
            case '1':
            case '2':
            case '3':
                return new AirEastShipper(this.weight, shipmentKind);
            case '4':
            case '5':
            case '6':
                return new ChicagoSprintShipper(this.weight, shipmentKind);
            case '7':
            case '8':
            case '9':
                return new PacificParcelShipper(this.weight, shipmentKind);
        }
    };
    Shipper.prototype.getCost = function () {
        return this.choseShiper().getCost();
    };
    return Shipper;
}());
exports["default"] = Shipper;
