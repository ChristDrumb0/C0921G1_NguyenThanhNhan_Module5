import { Shape } from "./shape";
import { IArea } from "./IArea";
export declare class Rectangle extends Shape implements IArea {
    private _width;
    private _height;
    constructor(x: number, y: number, _width: number, _height: number);
    area(): number;
}