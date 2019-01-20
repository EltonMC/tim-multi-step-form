import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from '../data/formData.service';
import Plans from '../../assets/data/plans.json';
import fourG from '../../assets/data/4g-tim.json';
import fibra from '../../assets/data/fibra-tim.json';
import { Location } from '../data/formData.model';

@Component ({
    // tslint:disable-next-line:component-selector
    selector:     'mt-wizard-plan',
    templateUrl: './plan.component.html'
})

export class PlanComponent implements OnInit {
    title = 'SELECIONE UM PLANO';
    plans: any;
    location: Location;
    flag4G = false;
    flagFibra = false;
    plan = {};
    form: any;

    constructor(private router: Router, private formDataService: FormDataService) {
      this.plans = Plans;
    }

    ngOnInit() {
        this.plan = this.formDataService.getPlan();
        this.location = this.formDataService.getLocation();
        // tslint:disable-next-line:max-line-length
        fourG.map(data => {if (this.removeAcento(data) === this.removeAcento(this.location.city.toUpperCase())) this.flag4G = true; });
        fibra.map(data => {if (this.removeAcento(data) === this.removeAcento(this.location.city.toUpperCase())) this.flagFibra = true; });

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
        // if (!form.valid) {
        //     return false;
        // }

        this.formDataService.setPlan(form);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the location page
            this.router.navigate(['/location']);
        }
    }

    goToNext(form: any) {
      console.log(form);
      if (this.save(form)) {
          // Navigate to the person page
          this.router.navigate(['/person']);
      }
    }
}
