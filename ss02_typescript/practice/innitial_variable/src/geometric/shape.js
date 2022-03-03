"use strict";
exports.__esModule = true;
exports.Shape = void 0;
var Shape = /** @class */ (function () {
    function Shape(x, y) {
        this._x = x;
        this._y = y;
    }
    Shape.prototype.toString = function () {
        return "(x: ".concat(this._x, ", y: ").concat(this._y, ")");
    };
    return Shape;
}());
exports.Shape = Shape;
