import * as faker from 'faker';
export class Company {
    conpanyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.conpanyName = faker.company.companyName();
        this.conpanyName = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    summarize(): string{
        return `<p><b>${this.conpanyName}</b></p><p>${this.catchPhrase}</p>`
    }

}