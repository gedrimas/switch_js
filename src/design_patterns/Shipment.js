"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.MarkedShipment = exports.ShipmentDecorator = exports.Shipment = void 0;
var Shipper_1 = require("./Shipper");
var Shipment = /** @class */ (function () {
    function Shipment(item) {
        var toAddress = item.toAddress, fromAddress = item.fromAddress, toZipCode = item.toZipCode, fromZipCode = item.fromZipCode, weight = item.weight, marks = item.marks, shipmentId = item.shipmentId;
        this.shipmentId = shipmentId;
        this.toAddress = toAddress;
        this.fromAddress = fromAddress;
        this.toZipCode = toZipCode;
        this.fromZipCode = fromZipCode;
        this.weight = weight;
        this.marks = marks;
    }
    Shipment.prototype.getShipmentId = function () {
        if (this.shipmentId)
            return this.shipmentId;
        if (Shipment.sId === 0) {
            return Shipment.sId = 1;
        }
        else {
            return Shipment.sId += 1;
        }
    };
    Shipment.prototype.getShipmentCost = function () {
        var cost = new Shipper_1["default"](this.weight, this.toZipCode).getCost();
        return Number(cost.toFixed(2));
    };
    Shipment.prototype.ship = function () {
        var shipment = "Shipment with the ID " + this.getShipmentId() + " will be picked up from " + this.fromZipCode + " " + this.fromAddress + " \n            and shipped to " + this.fromZipCode + " " + this.toAddress + ", OK 67721\n                Cost = " + this.getShipmentCost();
        console.log(shipment);
        return shipment;
    };
    Shipment.sId = 0;
    return Shipment;
}());
exports.Shipment = Shipment;
var ShipmentDecorator = /** @class */ (function () {
    function ShipmentDecorator(shipmentItem) {
        this.wrappee = shipmentItem;
        this.shipmentId = this.wrappee.shipmentId;
        this.toAddress = this.wrappee.toAddress;
        this.fromAddress = this.wrappee.fromAddress;
        this.toZipCode = this.wrappee.toZipCode;
        this.fromZipCode = this.wrappee.fromZipCode;
        this.weight = this.wrappee.weight;
        this.marks = this.wrappee.marks;
    }
    ShipmentDecorator.prototype.getShipmentId = function () {
        if (this.wrappee.shipmentId)
            return this.wrappee.shipmentId;
        if (ShipmentDecorator.sId === 0) {
            return ShipmentDecorator.sId = 1;
        }
        else {
            return ShipmentDecorator.sId += 1;
        }
    };
    ShipmentDecorator.prototype.getShipmentCost = function () {
        var cost = new Shipper_1["default"](this.wrappee.weight, this.wrappee.toZipCode).getCost();
        return Number(cost.toFixed(2));
    };
    ShipmentDecorator.prototype.ship = function () {
        var shipment = "Shipment with the ID " + this.wrappee.getShipmentId() + " will be picked up from " + this.wrappee.fromZipCode + " " + this.wrappee.fromAddress + " \n            and shipped to " + this.wrappee.fromZipCode + " " + this.wrappee.toAddress + ", OK 67721\n                Cost = " + this.wrappee.getShipmentCost();
        console.log(shipment);
        return shipment;
    };
    ShipmentDecorator.sId = 0;
    return ShipmentDecorator;
}());
exports.ShipmentDecorator = ShipmentDecorator;
var MarkedShipment = /** @class */ (function (_super) {
    __extends(MarkedShipment, _super);
    function MarkedShipment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkedShipment.prototype.getMarks = function () {
        var _a;
        ['Fragile', 'Do Not Leave', 'Return Receipt Requested'];
        var shipmentMarks = (_a = {
                Fragile: '**MARK FRAGILE**'
            },
            _a['Do Not Leave'] = '**MARK DO NOT LEAVE IF ADDRESS NOT AT HOME**',
            _a['Return Receipt Requested'] = '**MARK RETURN RECEIPT REQUESTED**',
            _a);
        var _b = this.wrappee.marks, fragile = _b[0], doNot = _b[1], returnReceipt = _b[2];
        return "\n        " + shipmentMarks[fragile] + " \n        " + shipmentMarks[doNot] + "\n        " + shipmentMarks[returnReceipt] + "\n        ";
    };
    MarkedShipment.prototype.ship = function () {
        var shipment = "Shipment with the ID " + this.wrappee.getShipmentId() + " will be picked up from " + this.wrappee.fromZipCode + " " + this.wrappee.fromAddress + " \n        and shipped to " + this.wrappee.toZipCode + " " + this.wrappee.toAddress + ", OK 67721\n        Cost = " + this.wrappee.getShipmentCost() + " \n            " + this.getMarks() + "\n            ";
        console.log(shipment);
        return shipment;
    };
    return MarkedShipment;
}(ShipmentDecorator));
exports.MarkedShipment = MarkedShipment;
