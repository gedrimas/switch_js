import { Shape, ShapeType } from './Shape';
import { Point } from './Point'

export class Triangle extends Shape {

    private point1: Point
    private point2: Point
    private point3: Point

    constructor(point1: Point, point2: Point, point3: Point)
    constructor(point1: Point, point2: Point, point3: Point, color: string, filled: boolean)
    constructor(point1: Point, point2: Point, point3: Point, color?: string, filled?: boolean) {
        super([point1, point2, point3], color, filled)
        this.point1 = point1
        this.point2 = point2
        this.point3 = point3
    }

    public toString(): string {
        return this.getPointsDescription([this.point1, this.point2, this.point3], ShapeType.TRIANGLE)
    }

    private evaluateSides(){
        const sidePoitn1ToPoint2 = new Point(this.point1.x, this.point1.y).distance(this.point2)
        const sidePoitn2ToPoint3 = new Point(this.point2.x, this.point2.y).distance(this.point3)
        const sidePoitn3ToPoint1 = new Point(this.point3.x, this.point3.y).distance(this.point1)

        return {sidePoitn1ToPoint2, sidePoitn2ToPoint3, sidePoitn3ToPoint1}
    }

    public getType(): string {
        let {sidePoitn1ToPoint2, sidePoitn2ToPoint3, sidePoitn3ToPoint1} = this.evaluateSides()

        sidePoitn1ToPoint2 = sidePoitn1ToPoint2.toFixed(2)
        sidePoitn2ToPoint3 = sidePoitn2ToPoint3.toFixed(2)
        sidePoitn3ToPoint1 = sidePoitn3ToPoint1.toFixed(2)

        if(sidePoitn1ToPoint2 ===  sidePoitn2ToPoint3
            && sidePoitn2ToPoint3 === sidePoitn3ToPoint1 
            ) return 'equilateral triangle'
        
        if(sidePoitn1ToPoint2 === sidePoitn2ToPoint3 
            || sidePoitn1ToPoint2 === sidePoitn3ToPoint1 
            || sidePoitn2ToPoint3 === sidePoitn3ToPoint1
            ) {
            return 'isosceles triangle'
        }
        
        return 'scalene triangle'
    }
}
