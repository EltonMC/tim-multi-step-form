import { Injectable } from '@angular/core';

import { FormData, Location, Person } from './formData.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isLocationFormValid = false;
    private isPlanFormValid = false;
    private isPersonFormValid = false;

    constructor(private workflowService: WorkflowService) {
    }

    getLocation(): Location {
        // Return the Location data
        const location: Location = {
            state: this.formData.state,
            city: this.formData.city,
            phone: this.formData.phone
        };
        return location;
    }

    setLocation(data: Location) {
        // Update the Location data only when the Location Form had been validated successfully
        this.isLocationFormValid = true;
        this.formData.state = data.state;
        this.formData.city = data.city;
        this.formData.phone = data.phone;
        // Validate Location Step in Workflow
        this.workflowService.validateStep(STEPS.location);
    }

    getPlan(): object {
        // Return the plan type
        return this.formData.plan;
    }

    setPlan(data) {
        // Update the plan type only when the Plan Form had been validated successfully
        this.isPlanFormValid = true;
        this.formData.plan = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.plan);
    }

    getPerson(): Person {
        // Return the Person data
        const person: Person = {
            name: this.formData.name,
            cpf: this.formData.cpf,
            email: this.formData.email,
            birthday: this.formData.birthday,
            rg: this.formData.rg,
            expe: this.formData.expe,
            uf: this.formData.uf,
            nasc: this.formData.nasc,
            phone: this.formData.phone,
            phone_2: this.formData.phone_2,
            mother: this.formData.mother,
            main_address: this.formData.main_address,
            aux_address: this.formData.aux_address,
        };
        return person;
    }

    setPerson(data: Person) {
        // Update the Person data only when the Person Form had been validated successfully
        this.isPersonFormValid = true;
        this.formData.name = data.name;
        this.formData.cpf = data.cpf;
        this.formData.email = data.email;
        this.formData.birthday = data.birthday;
        this.formData.rg = data.rg;
        this.formData.expe = data.expe;
        this.formData.uf = data.uf;
        this.formData.nasc = data.nasc;
        this.formData.phone = data.phone;
        this.formData.phone_2 = data.phone_2;
        this.formData.mother = data.mother;
        this.formData.main_address = data.main_address;
        this.formData.aux_address = data.aux_address;
        // Validate Person Step in Workflow
        this.workflowService.validateStep(STEPS.person);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isLocationFormValid = this.isPlanFormValid = this.isPersonFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isLocationFormValid &&
                this.isPlanFormValid &&
                this.isPersonFormValid;
    }
}
