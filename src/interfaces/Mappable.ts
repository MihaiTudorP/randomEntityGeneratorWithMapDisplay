export interface Mappable{
    location: {
        lat: number;
        lng: number;
    }
    summarize():string;
}