
// import {Shape} from "./shape";


import {Shape} from "./shape";
import {IArea} from "./IArea";

export class Rectangle extends Shape implements IArea {
    constructor(x: number, y: number, private _width: number, private _height: number) {
        super(x, y);
    }

    area(): number {
        return this._width*this._height;
    }
}