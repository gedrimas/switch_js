"use strict";
exports.__esModule = true;
var Shipment_1 = require("./Shipment");
var Gui_1 = require("./Gui");
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
var item = new Gui_1.Gui(150, '55555', '11111', 'Mockingbird Lane, Tulsa', '4th Ave SE, Bellevue, Wa 92021', undefined, ['Fragile', 'Do Not Leave', 'Return Receipt Requested']);
new Client(item).onShip(Shipment_1.Shipment);
new Client(item).onShip(Shipment_1.Shipment);
new Client(item).onShip(Shipment_1.Shipment);
