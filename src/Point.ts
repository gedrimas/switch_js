interface PointCoordinates {
    x: number
    y: number
}

type Coordinates = PointCoordinates[keyof PointCoordinates]
type Distance = number

export class Point {
     x: Coordinates
     y: Coordinates

    constructor()
    constructor(x: Coordinates, y: Coordinates)
    constructor(...points: Coordinates[]) {
        if(points.length === 2){
         const [x, y] = points
            this.x = x
            this.y = y
         return   
        }
        this.x = 0
        this.y = 0
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`
    }

    protected getDistance(x: Coordinates, y: Coordinates): Distance {
        return Math.sqrt(Math.pow((this.x - x), 2) + Math.pow((this.y - y), 2))
    } 

    public distance()
    public distance(other: Point)
    public distance(x: Coordinates, y:Coordinates)
    public distance(...coordinates: [Point] | [Coordinates, Coordinates] | undefined) {

        if(coordinates.length === 1) {
            if(coordinates[0]) {
            const [{x, y}] = coordinates
            return this.getDistance(x, y)
            }
        }

        if(coordinates.length === 2) {
            const [x, y] = coordinates
            return this.getDistance(x, y)
        }

        return this.getDistance(0, 0)
     }

}
