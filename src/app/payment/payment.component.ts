import { EmailService } from './../services/email.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Bank, Person, Address } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

import Banks from '../../assets/data/banks.json';
import fourG from '../../assets/data/4g-tim.json';
import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})

export class PaymentComponent implements OnInit {

    title = 'FORMA DE PAGAMENTO';
    payment: Bank;
    person: Person;
    mainAddress: Address;
    auxAddress: Address;
    dateEnd = '';
    typePayment: any;
    banks: any;
    form: any;
    plan: any;
    end = false;
    terms: any;
    flagCpf = false;

    constructor(
      private router: Router,
      private formDataService: FormDataService,
      private emailService: EmailService,
      private gtag: Gtag) {
      this.banks = Banks;
    }

    ngOnInit() {
        this.payment = this.formDataService.getBank();
        this.plan = this.formDataService.getPlan();
        this.person = this.formDataService.getPerson();
        this.mainAddress = this.formDataService.getMainAddress();
        this.auxAddress = this.formDataService.getAuxAddress();
    }


    save(form: any): boolean {
        // tslint:disable-next-line:curly
        // tslint:disable-next-line:max-line-length
        // this.formDataService.setLocation(this.location);
        return true;
    }

    goToNext(form: any) {
      const body =
        '<h1> Dados do formulario: </h1>' +
        '<h3> Dados do cliente: </h3>' +
        '<p> Nome Completo: ' + this.person.name + '</p>' +
        '<p> CPF: ' + this.person.cpf + '</p>' +
        '<p> Email: ' + this.person.email + '</p>' +
        '<p> Dada de Nascimento: ' + this.person.birthday + '</p>' +
        '<p> RG:' + this.person.rg + '</p>' +
        '<p> Data de expedição:' + this.person.expe_date + '</p>' +
        '<p> Orgão expedidor: ' + this.person.expe + '</p>' +
        '<p> UF expedição:' + this.person.uf + '</p>' +
        '<p> Nascionalidade:' + this.person.nasc + '</p>' +
        '<p> Celular: ' + this.person.phone + '</p>' +
        '<p> Telefone: ' + this.person.phone_2 + '</p>' +
        '<p> Nome da Mãe:' + this.person.mother + '</p>' +
        '<h3> Endereço: </h3>' +
        '<p> CEP:' + this.mainAddress.cep + '</p>' +
        '<p> Rua:' + this.mainAddress.street + '</p>' +
        '<p> Bairro:' + this.mainAddress.district + '</p>' +
        '<p> Cidade:' + this.mainAddress.city + '</p>' +
        '<p> Estado:' + this.mainAddress.state + '</p>' +
        '<p> Número:' + this.mainAddress.number + '</p>' +
        '<p> Complemento:' + this.mainAddress.complement + '</p>' +
        '<p> Referência:' + this.mainAddress.ref + '</p>' +
        '<h3> Endereço de Instalação: </h3>' +
        '<p> CEP:' + this.auxAddress.cep + '</p>' +
        '<p> Rua:' + this.auxAddress.street + '</p>' +
        '<p> Bairro:' + this.auxAddress.district + '</p>' +
        '<p> Cidade:' + this.auxAddress.city + '</p>' +
        '<p> Estado:' + this.auxAddress.state + '</p>' +
        '<p> Número:' + this.auxAddress.number + '</p>' +
        '<p> Complemento:' + this.auxAddress.complement + '</p>' +
        '<p> Referência:' + this.auxAddress.ref + '</p>' +
        '<h3> Plano: </h3>' +
        '<p> ID:' + this.plan.id + '</p>' +
        '<p> Tipo:' + this.plan.type + '</p>' +
        '<p> Plano:' + this.plan.franquia + ' ' + this.plan.franquia_desc + '</p>' +
        '<p> Valor:' + this.plan.valor + ',' + this.plan.centavos + '</p>' +
        '<h3> Forma de Pagamento: </h3>' +
        '<p> Tipo: ' + this.typePayment + '</p>' +
        '<p> Nome Completo: ' + this.payment.name + '</p>' +
        '<p> CPF: ' + this.payment.cpf + '</p>' +
        '<p> Banco: ' + this.payment.bank + '</p>' +
        '<p> Agencia: ' + this.payment.agency + '</p>' +
        '<p> Conta: ' + this.payment.account + '</p>' +
        '<p> Digito: ' + this.payment.digit + '</p>' +

        '<h3> Vencimento da Fatura: ' + this.dateEnd + '</h3>';
      if (this.save(form)) {
          this.emailService.send('[TIM] Contrate Agora - ' + this.person.phone, body).subscribe(res => {
            this.gtag.event('conversion', {
              send_to: 'AW-851418879/VnMWCLCVw5MBEP-9_pUD',
            });
            this.end = true;
          }, err => {});
      }
    }
}
