"use strict";
exports.__esModule = true;
exports.Gui = exports.mockItem = void 0;
exports.mockItem = {
    shipmentId: undefined,
    toAddress: 'Mockingbird Lane, Tulsa',
    fromAddress: '4th Ave SE, Bellevue, Wa 92021',
    toZipCode: '55555',
    fromZipCode: '11111',
    weight: 150,
    marks: ['Fragile', 'Do Not Leave', 'Return Receipt Requested']
};
var Gui = /** @class */ (function () {
    function Gui(weight, fromZipCode, toZipCode, toAddress, fromAddress, shipmentId, marks) {
        this.weight = weight;
        this.fromZipCode = fromZipCode;
        this.toZipCode = toZipCode;
        this.toAddress = toAddress;
        this.fromAddress = fromAddress;
        this.shipmentId = shipmentId;
        this.marks = marks;
    }
    return Gui;
}());
exports.Gui = Gui;
