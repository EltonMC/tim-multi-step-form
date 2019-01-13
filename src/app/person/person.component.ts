import { EmailService } from './../services/email.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component ({
    // tslint:disable-next-line:component-selector
    selector:     'mt-wizard-person',
    templateUrl: './person.component.html'
})

export class PersonComponent implements OnInit {
    // title = 'Where do you live?';
    person: Person;
    form: any;

    constructor(private router: Router, private formDataService: FormDataService, private emailService: EmailService) {
    }

    ngOnInit() {
        this.person = this.formDataService.getPerson();
        console.log('Person feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

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

        const body =
          '<h1> Dados do formulario: </h1>' +
          '<h3> Dados do cliente: </h3>' +
          '<p> Nome Completo:' + this.person.name + '<?p>' +
          '<p> CPF: ' + this.person.cpf + '<?p>' +
          '<p> Email: ' + this.person.email + '<?p>' +
          '<p> Dada de Nascimento: ' + this.person.birthday + '<?p>' +
          '<p> RG:' + this.person.rg + '<?p>' +
          '<p> Orgão expedidor: ' + this.person.expe + '<?p>' +
          '<p> UF expedição:' + this.person.uf + '<?p>' +
          '<p> Nascionalidade:' + this.person.nasc + '<?p>' +
          '<p> Celular: ' + this.person.phone + '<?p>' +
          '<p> Telefone: ' + this.person.phone_2 + '<?p>' +
          '<p> Nome da Mãe:' + this.person.mother;
        if (this.save(form)) {
            this.emailService.send('[TIM] Contrate Agora', body).subscribe(res => {
              // Navigate to the result page
              this.router.navigate(['/result']);
            }, err => {});
        }
    }
}
