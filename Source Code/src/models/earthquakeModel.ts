//Model for holding only required data from API Response

export class EarthQuakeData {
    time: Date;
    magnitude: number;
    place: number;
    type: string;
    xcoordinate: number;
    ycoordinate: number;
    zcoordinate: number;
}