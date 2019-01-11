export class FormData {
    state: string = '';
    city: string = '';
    phone: string = '';
    plan = {};
    name: string = '';
    cpf: string = '';
    email: string = '';
    birthday: string = '';
    rg: string = '';
    expe: string = '';
    uf: string = '';
    nasc: string = '';
    phone_2: string = '';
    mother: string = '';
    main_address: Address;
    aux_address: Address;
    clear() {
       this.state = '';
        this.city = '';
        this.phone = '';
        this.plan = {};
    }
}

export class Location {
    state: string = '';
    city: string = '';
    phone: string = '';
}

export class Person {
    name: string = '';
    cpf: string = '';
    email: string = '';
    birthday: string = '';
    rg: string = '';
    expe: string = '';
    uf: string = '';
    nasc: string = '';
    phone: string = '';
    phone_2: string = '';
    mother: string = '';
    main_address: Address;
    aux_address: Address;
}

export class Address {
    cep: string = '';
    street: string = '';
    district: string = '';
    city: string = '';
    state: string = '';
    number: string = '';
    complement: string = '';
    ref: string = '';
}
