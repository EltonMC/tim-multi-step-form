export class FormData {
    state = '';
    city = '';
    phone = '';
    plan = {};
    name = '';
    cpf = '';
    email = '';
    birthday = '';
    rg = '';
    expe_date = '';
    expe = '';
    uf = '';
    nasc = '';
    phone_2 = '';
    mother = '';
    mainAddress: Address = {'cep': '', 'city': '', 'street': '', 'district': '', 'complement': '', 'number': '', 'ref': '', 'state': ''};
    auxAddress: Address  = {'cep': '', 'city': '', 'street': '', 'district': '', 'complement': '', 'number': '', 'ref': '', 'state': ''};
    bank: Bank = {'account': '', 'agency': '', 'bank': '', 'cpf': '', 'name': '', 'digit': ''};
    clear() {
      this.state = '';
      this.city = '';
      this.phone = '';
      this.plan = {};
      this.name = '';
      this.cpf = '';
      this.email = '';
      this.birthday = '';
      this.rg = '';
      this.expe = '';
      this.uf = '';
      this.nasc = '';
      this.phone_2 = '';
      this.mother = '';
      this.mainAddress = {'cep': '', 'city': '', 'street': '', 'district': '', 'complement': '', 'number': '', 'ref': '', 'state': ''};
      this.auxAddress = {'cep': '', 'city': '', 'street': '', 'district': '', 'complement': '', 'number': '', 'ref': '', 'state': ''};
    }
}

export class Location {
    state = '';
    city = '';
    phone = '';
}

export class Person {
    name = '';
    cpf = '';
    email = '';
    birthday = '';
    rg = '';
    expe_date = '';
    expe = '';
    uf = '';
    nasc = '';
    phone = '';
    phone_2 = '';
    mother = '';
}

export class Address {
    cep = '';
    street = '';
    district = '';
    city = '';
    state = '';
    number = '';
    complement = '';
    ref = '';
}

export class Bank {
  name = '';
  bank = '';
  account = '';
  cpf = '';
  agency = '';
  digit = '';

}
