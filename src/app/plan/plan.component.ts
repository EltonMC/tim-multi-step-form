import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from '../data/formData.service';
import Plans from '../../assets/data/plans.json';

@Component ({
    // tslint:disable-next-line:component-selector
    selector:     'mt-wizard-plan',
    templateUrl: './plan.component.html'
})

export class PlanComponent implements OnInit {
    title = 'SELECIONE UM PLANO';
    plans: object = {};
    plan = {};
    form: any;

    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.plans = Plans;
        this.plan = this.formDataService.getPlan();
        console.log('Plan feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setPlan(this.plan);
        return true;
    }

    goToPrevious(form: any) {
        if (this.save(form)) {
            // Navigate to the location page
            this.router.navigate(['/location']);
        }
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the address page
            this.router.navigate(['/address']);
        }
    }
}
