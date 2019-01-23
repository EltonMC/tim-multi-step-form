import { EmailService } from './../services/email.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

import Brazil from '../../assets/data/brazil-states-cities.json';
import fourG from '../../assets/data/4g-tim.json';
import fibra from '../../assets/data/fibra-tim.json';

@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'mt-wizard-location',
    templateUrl: './Location.component.html'
})

export class LocationComponent implements OnInit {
    title = 'Verifique nossa disponibilidade';
    location: Location;
    flagLocation = false;
    states: any;
    cities = [];
    form: any;

    constructor(private router: Router, private formDataService: FormDataService, private emailService: EmailService) {
      this.states = Brazil.states;
    }

    ngOnInit() {
        this.location = this.formDataService.getLocation();
    }

    onChange(event) {
       // tslint:disable-next-line:curly
       this.states.map(data => { if (data.uf === this.location.state) this.cities = data.cities; });
    }

    removeAcento (text) {
        text = text.toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
        text = text.replace(new RegExp('[Ç]','gi'), 'c');
        return text;
    }

    save(form: any): boolean {
        // tslint:disable-next-line:curly
        // tslint:disable-next-line:max-line-length
        fourG.map(data => {if (this.removeAcento(data) === this.removeAcento(this.location.city.toUpperCase())) this.flagLocation = true; });
        fibra.map(data => {if (this.removeAcento(data) === this.removeAcento(this.location.city.toUpperCase())) this.flagLocation = true; });

        if (!form.valid) {
          return false;
        }else if (!this.flagLocation) {
          this.flagLocation = true;
          return false;
        }

        this.formDataService.setLocation(this.location);
        return true;
    }

    goToNext(form: any) {
      const body =
      '<h1> Dados do formulario: </h1>' +
      '<h3> Dados do cliente: </h3>' +
      '<p> Celular: ' + this.location.phone + '<?p>' +
      '<p> Estado: ' + this.location.state + '<?p>' +
      '<p> Cidade: ' + this.location.city + '<?p>';
      this.emailService.send('[TIM] Disponibilidade - ' + this.location.phone, body).subscribe(res => {
        if (this.save(form)) {
          // Navigate to the plan page
          this.router.navigate(['/plan']);
        }
      }, err => {});
    }
}
