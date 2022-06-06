import {Point} from './Point'

export enum ShapeType {
    TRIANGLE = 'Triangle',
    POINTS = 'Points'
}

export abstract class Shape {
    abstract getType(): string;
    
    protected color: string
    protected filled: boolean
    protected points: Point[]

    constructor(points: Point[])
    constructor(points: Point[], color: string, filled: boolean)
    constructor(points: Point[], color = 'green', filled = true){
        this.chekPoints(points)
        this.points = points
        this.color = color
        this.filled = filled
    } 


    protected chekPoints(points: Point[]): never | void {
        if(points?.length === 2) throw new Error()
    } 

    
    protected getFillDescription(): string {
        return this.filled ? 'filled' : 'not filled'
    }

    protected getPointsDescription(points: Point[], type = ShapeType.POINTS): string {
        const [{x: x1, y: y1}, {x: x2, y: y2}, {x: x3, y: y3}] = points

        switch(type) {
            case ShapeType.POINTS:
                return `Points: (${x1}, ${y1}), (${x2}, ${y2}), (${x3}, ${y3}).`
            break;
            case ShapeType.TRIANGLE:
                return `Triangle[v1=(${x1}, ${y1}),v2=(${x2}, ${y2}),v3=(${x3}, ${y3})]`
            break;
            default: return ''    
        }
    } 

    public toString(): string {
        return `A Shape with color of ${this.color} and ${this.getFillDescription()}. ${this.getPointsDescription(this.points)}`
    }

    public getPerimeter(): number {
        return this.points.reduce((perimeter, currentPoint, index, allPoints) => {
            return perimeter + new Point(currentPoint.x, currentPoint.y).distance(allPoints[index + 1])
        }, 0)
    }
}
