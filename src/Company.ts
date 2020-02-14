import * as faker from 'faker';
import {Mappable} from './interfaces/Mappable';
export class Company implements Mappable{
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };
    color: string = 'green';

    constructor() {
        this.companyName = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    summarize(): string{
        console.log(this.catchPhrase);
        return `<div>
                    <h1>${this.companyName}</h1>
                    <h3>${this.catchPhrase}</h3>
                </div>`;
    }

}