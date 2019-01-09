import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Location } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

import Brazil from '../../assets/data/brazil-states-cities.json';
import fourG from '../../assets/data/4g-tim.json';



@Component ({
    // tslint:disable-next-line:component-selector
    selector: 'mt-wizard-location',
    templateUrl: './Location.component.html'
})

export class LocationComponent implements OnInit {
    title = 'Verifique nossa disponibilidade';
    location: Location;
    states: any;
    cities = [];
    form: any;

    constructor(private router: Router, private formDataService: FormDataService) {
      this.states = Brazil.states;
    }

    ngOnInit() {
        this.location = this.formDataService.getLocation();
    }
    
    onChange(event){
       this.states.map(data => { if(data.uf == this.location.state) this.cities = data.cities; });
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
        if (!form.valid) {
            return false;
        }else if( fourG.map(data => { if (this.removeAcento(data) === this.removeAcento(this.location.city.toUpperCase())) return true; }) ){
          console.log("4g!");
        }

        this.formDataService.setLocation(this.location);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/work']);
        }
    }
}
