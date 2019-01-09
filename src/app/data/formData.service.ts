import { Injectable } from '@angular/core';

import { FormData, Location, Address } from './formData.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isLocationFormValid = false;
    private isPlanFormValid = false;
    private isAddressFormValid = false;

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

    getAddress(): Address {
        // Return the Address data
        const address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
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
        this.isLocationFormValid = this.isPlanFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isLocationFormValid &&
                this.isPlanFormValid &&
                this.isAddressFormValid;
    }
}
