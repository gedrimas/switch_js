export const mockItem = {
    shipmentId: undefined,
    toAddress: 'Mockingbird Lane, Tulsa',
    fromAddress: '4th Ave SE, Bellevue, Wa 92021',
    toZipCode: '55555',
    fromZipCode: '11111',
    weight: 150,
    marks: ['Fragile', 'Do Not Leave', 'Return Receipt Requested'], 
}

interface IGui {
  
    toAddress: string,
    fromAddress: string,
    toZipCode: string,
    fromZipCode: string,
    weight: number,
    shipmentId?: number,
    marks?: string[], 
}

export class Gui implements IGui {
    constructor(
        public weight: number,
        public fromZipCode: string,
        public toZipCode: string,
        public toAddress: string,
        public fromAddress: string,
        public shipmentId?: number,
        public marks?: string[] 
        ){}
}