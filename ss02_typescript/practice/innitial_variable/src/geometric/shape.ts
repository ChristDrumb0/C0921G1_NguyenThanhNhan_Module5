export class Shape {
    private _x: number;

    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    toString(): string {
        return `(x: ${this._x}, y: ${this._y})`;
    }
}