"use strict";
exports.__esModule = true;
exports.Oversize = exports.Package = exports.Letter = void 0;
var ShipmentKindsCompaniesRates;
(function (ShipmentKindsCompaniesRates) {
    ShipmentKindsCompaniesRates[ShipmentKindsCompaniesRates["LETTER_AIR_EAST"] = 0.39] = "LETTER_AIR_EAST";
    ShipmentKindsCompaniesRates[ShipmentKindsCompaniesRates["PACKAGE_AIR_EAST"] = 0.25] = "PACKAGE_AIR_EAST";
    ShipmentKindsCompaniesRates[ShipmentKindsCompaniesRates["OVERSIZE_AIR_EAST"] = 10] = "OVERSIZE_AIR_EAST";
    ShipmentKindsCompaniesRates[ShipmentKindsCompaniesRates["STANDARD_AIR_EAST"] = 0.39] = "STANDARD_AIR_EAST";
    ShipmentKindsCompaniesRates[ShipmentKindsCompaniesRates["LETTER_CHICAGO"] = 0.42] = "LETTER_CHICAGO";
    ShipmentKindsCompaniesRates[ShipmentKindsCompaniesRates["PACKAGE_CHICAGO"] = 0.2] = "PACKAGE_CHICAGO";
    ShipmentKindsCompaniesRates[ShipmentKindsCompaniesRates["OVERSIZE_CHICAGO"] = 0] = "OVERSIZE_CHICAGO";
    ShipmentKindsCompaniesRates[ShipmentKindsCompaniesRates["LETTER_PACIFIC"] = 0.51] = "LETTER_PACIFIC";
    ShipmentKindsCompaniesRates[ShipmentKindsCompaniesRates["PACKAGE_PACIFIC"] = 0.19] = "PACKAGE_PACIFIC";
    ShipmentKindsCompaniesRates[ShipmentKindsCompaniesRates["OVERSOZE_PACIFIC"] = 0.2] = "OVERSOZE_PACIFIC";
    ShipmentKindsCompaniesRates[ShipmentKindsCompaniesRates["STANDARD_PACIFIC"] = 0.51] = "STANDARD_PACIFIC";
})(ShipmentKindsCompaniesRates || (ShipmentKindsCompaniesRates = {}));
var Letter = /** @class */ (function () {
    function Letter() {
    }
    Letter.prototype.getAirEastShipperRate = function () {
        return ShipmentKindsCompaniesRates.LETTER_AIR_EAST;
    };
    Letter.prototype.getChicagoSprintShipperRate = function () {
        return ShipmentKindsCompaniesRates.LETTER_CHICAGO;
    };
    Letter.prototype.getPacificParcelShipperRate = function () {
        return ShipmentKindsCompaniesRates.LETTER_PACIFIC;
    };
    return Letter;
}());
exports.Letter = Letter;
var Package = /** @class */ (function () {
    function Package() {
    }
    Package.prototype.getAirEastShipperRate = function () {
        return ShipmentKindsCompaniesRates.PACKAGE_AIR_EAST;
    };
    Package.prototype.getChicagoSprintShipperRate = function () {
        return ShipmentKindsCompaniesRates.PACKAGE_CHICAGO;
    };
    Package.prototype.getPacificParcelShipperRate = function () {
        return ShipmentKindsCompaniesRates.PACKAGE_PACIFIC;
    };
    return Package;
}());
exports.Package = Package;
var Oversize = /** @class */ (function () {
    function Oversize() {
    }
    Oversize.prototype.getAirEastShipperRate = function () {
        return ShipmentKindsCompaniesRates.STANDARD_AIR_EAST;
    };
    Oversize.prototype.getChicagoSprintShipperRate = function () {
        return 0;
    };
    Oversize.prototype.getPacificParcelShipperRate = function () {
        return ShipmentKindsCompaniesRates.STANDARD_PACIFIC;
    };
    Oversize.oversizeAirEast = 10;
    Oversize.oversizeChicago = 0;
    Oversize.oversizePacific = 0.2;
    return Oversize;
}());
exports.Oversize = Oversize;
var ShipentKinds = /** @class */ (function () {
    function ShipentKinds(weight) {
        this.weight = weight;
    }
    ShipentKinds.prototype.getShipmentItemKindBaseOnWeight = function () {
        if (this.weight <= 15)
            return Letter;
        if (this.weight > 15 && this.weight <= 160)
            return Package;
        if (this.weight > 160)
            return Oversize;
    };
    return ShipentKinds;
}());
exports["default"] = ShipentKinds;
