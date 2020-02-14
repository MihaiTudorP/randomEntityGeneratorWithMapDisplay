import * as faker from 'faker';
import {Mappable} from './interfaces/Mappable';

export class User implements Mappable{
    name: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'blue';

    constructor() {
        this.name = `${faker.name.firstName()} ${faker.name.lastName()}`;
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    summarize(): string {
        return this.name;
    }
}