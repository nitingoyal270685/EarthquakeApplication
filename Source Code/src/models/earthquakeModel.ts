//Model for holding only required data from API Response

export class EarthQuakeData {
    time: Date;
    magnitude: number;
    place: number;
    type: string;
    xCoordinate: number;
    yCoordinate: number;
    zCoordinate: number;
}