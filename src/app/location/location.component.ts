import { EmailService } from './../services/email.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

import Brazil from '../../assets/data/brazil-states-cities.json';
// import fourG from '../../assets/data/4g-tim.json';
// import fibra from '../../assets/data/fibra-tim.json';

import { DataService } from '../services/data.service';

@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'mt-wizard-location',
    templateUrl: './Location.component.html'
})

export class LocationComponent implements OnInit {
    title = 'Verifique nossa disponibilidade';
    location: Location;
    flagLocation = false;
    flagLocationWarning = false;
    states: any;
    cities = [];
    form: any;
    fibra = [];
    fourG = [];

    constructor(private router: Router,
      private formDataService: FormDataService,
      private emailService: EmailService,
      private dataService: DataService) {

        this.states = Brazil.states;
    }

    ngOnInit() {
      this.dataService.getData('4g-tim.json').subscribe(res => {
        this.fourG = res;
      });
      this.dataService.getData('fibra-tim.json').subscribe(res => {
        this.fibra = res;
      });
      this.location = this.formDataService.getLocation();
    }

    onChange(event) {
       // tslint:disable-next-line:curly
       this.states.map(data => { if (data.uf === this.location.state) this.cities = data.cities; });
       this.flagLocationWarning = false;
       this.flagLocation = false;
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
        this.fourG.map(data => {if (this.removeAcento(data) === this.removeAcento(this.location.city.toUpperCase())) this.flagLocation = true; });
        this.fibra.map(data => {if (this.removeAcento(data) === this.removeAcento(this.location.city.toUpperCase())) this.flagLocation = true; });

        if (!form.valid) {
          return false;
        }else if (!this.flagLocation) {
          this.flagLocationWarning = true;
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
      if (this.save(form)) {
        this.emailService.send('[TIM] Com Disponibilidade - ' + this.location.phone, body).subscribe(res => {
            // Navigate to the plan page
            this.router.navigate(['/plan']);
        }, err => {});
        this.dataService.sendDisponibility(this.location.phone, this.location.city, this.location.state).subscribe(res => {
          console.log(res);
        }, err => console.log(err));
      }else {
        this.emailService.send('[TIM] Sem Disponibilidade - ' + this.location.phone, body).subscribe(res => {
      }, err => {});
    }
  }
}

