import { EmailService } from './../services/email.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person, Address } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';
import Brazil from '../../assets/data/brazil-states-cities.json';

@Component ({
    // tslint:disable-next-line:component-selector
    selector:     'mt-wizard-person',
    templateUrl: './person.component.html'
})

export class PersonComponent implements OnInit {
    // title = 'Where do you live?';
    person: Person;
    flagAddress = false;
    mainAddress: Address;
    auxAddress: Address;
    dateEnd = '';
    states: any;
    form: any;

    constructor(private router: Router, private formDataService: FormDataService, private emailService: EmailService) {
      this.states = Brazil.states;
    }

    ngOnInit() {
        this.person = this.formDataService.getPerson();
        this.mainAddress = this.formDataService.getMainAddress();
        this.auxAddress = this.formDataService.getAuxAddress();
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setMainAddress(this.mainAddress);
        this.formDataService.setAuxAddress(this.auxAddress);
        this.formDataService.setPerson(this.person);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the plan page
            this.router.navigate(['/plan']);
        }
    }

    goToNext(form: any) {

        if (!this.flagAddress) {
          this.auxAddress = this.mainAddress;
        }
        // const body =
        //   '<h1> Dados do formulario: </h1>' +
        //   '<h3> Dados do cliente: </h3>' +
        //   '<p> Nome Completo: ' + this.person.name + '</p>' +
        //   '<p> CPF: ' + this.person.cpf + '</p>' +
        //   '<p> Email: ' + this.person.email + '</p>' +
        //   '<p> Dada de Nascimento: ' + this.person.birthday + '</p>' +
        //   '<p> RG:' + this.person.rg + '</p>' +
        //   '<p> Orgão expedidor: ' + this.person.expe + '</p>' +
        //   '<p> UF expedição:' + this.person.uf + '</p>' +
        //   '<p> Nascionalidade:' + this.person.nasc + '</p>' +
        //   '<p> Celular: ' + this.person.phone + '</p>' +
        //   '<p> Telefone: ' + this.person.phone_2 + '</p>' +
        //   '<p> Nome da Mãe:' + this.person.mother + '</p>' +
        //   '<h3> Endereço: </h3>' +
        //   '<p> CEP:' + this.mainAddress.cep + '</p>' +
        //   '<p> Rua:' + this.mainAddress.street + '</p>' +
        //   '<p> Bairro:' + this.mainAddress.district + '</p>' +
        //   '<p> Cidade:' + this.mainAddress.city + '</p>' +
        //   '<p> Estado:' + this.mainAddress.state + '</p>' +
        //   '<p> Número:' + this.mainAddress.number + '</p>' +
        //   '<p> Complemento:' + this.mainAddress.complement + '</p>' +
        //   '<p> Referência:' + this.mainAddress.ref + '</p>' +
        //   '<h3> Endereço de Instalação: </h3>' +
        //   '<p> CEP:' + this.auxAddress.cep + '</p>' +
        //   '<p> Rua:' + this.auxAddress.street + '</p>' +
        //   '<p> Bairro:' + this.auxAddress.district + '</p>' +
        //   '<p> Cidade:' + this.auxAddress.city + '</p>' +
        //   '<p> Estado:' + this.auxAddress.state + '</p>' +
        //   '<p> Número:' + this.auxAddress.number + '</p>' +
        //   '<p> Complemento:' + this.auxAddress.complement + '</p>' +
        //   '<p> Referência:' + this.auxAddress.ref + '</p>';
        if (this.save(form)) {
            // this.emailService.send('[TIM] Contrate Agora', body).subscribe(res => {
              // Navigate to the result page
              this.router.navigate(['/payment']);
            // }, err => {});
        }
    }
}
