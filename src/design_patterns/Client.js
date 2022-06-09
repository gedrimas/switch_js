"use strict";
exports.__esModule = true;
var Shipment_1 = require("./Shipment");
var mock_1 = require("./mock");
var Client = /** @class */ (function () {
    function Client(shipmentItem) {
        var shipmentId = shipmentItem.shipmentId, toAddress = shipmentItem.toAddress, fromAddress = shipmentItem.fromAddress, toZipCode = shipmentItem.toZipCode, fromZipCode = shipmentItem.fromZipCode, weight = shipmentItem.weight, marks = shipmentItem.marks;
        this.shipmentId = shipmentId;
        this.toAddress = toAddress;
        this.fromAddress = fromAddress;
        this.toZipCode = toZipCode;
        this.fromZipCode = fromZipCode;
        this.weight = weight;
        this.marks = marks;
    }
    Client.prototype.onShip = function (shipment) {
        var shipmentItem = new shipment(this);
        var markedShipment = new Shipment_1.MarkedShipment(shipmentItem);
        markedShipment.ship();
        //new shipment(this).ship()
    };
    return Client;
}());
new Client(mock_1.mockItem).onShip(Shipment_1["default"]);
new Client(mock_1.mockItem).onShip(Shipment_1["default"]);
new Client(mock_1.mockItem).onShip(Shipment_1["default"]);
