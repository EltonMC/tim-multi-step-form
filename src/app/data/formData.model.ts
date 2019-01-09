export class FormData {
    state: string = '';
    city: string = '';
    phone: string = '';
    plan = {};
    street: string = '';
    zip: string = '';

    clear() {
        this.state = '';
        this.city = '';
        this.phone = '';
        this.plan = {};
        this.street = '';
        this.zip = '';
    }
}

export class Location {
    state: string = '';
    city: string = '';
    phone: string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}
