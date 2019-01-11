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

    constructor(private router: Router, private formDataService: FormDataService) {
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
        if (this.save(form)) {
            // Navigate to the result page
            this.router.navigate(['/result']);
        }
    }
}
