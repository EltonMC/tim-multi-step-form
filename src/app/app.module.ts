import { CepService } from './services/cep.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/* App Root */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Feature Components */
import { LocationComponent } from './location/location.component';
import { PlanComponent } from './plan/plan.component';
import { PersonComponent } from './person/person.component';
import { ResultComponent } from './result/result.component';
import { CpfCnpjModule } from 'ng2-cpf-cnpj';
import { SlickModule } from 'ngx-slick';
import { GtagModule } from 'angular-gtag';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Shared Service */
import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { NgxMaskModule } from 'ngx-mask';
import { EmailService } from './services/email.service';
import { PaymentComponent } from './payment/payment.component';
import { DataService } from './services/data.service';

@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    AppRoutingModule,
                    HttpClientModule,
                    CpfCnpjModule,
                    GtagModule.forRoot({ trackingId: 'UA-132180549-1', trackPageviews: true }),
                    NgxMaskModule.forRoot(),
                    SlickModule.forRoot()
                  ],
    providers:    [
      { provide: EmailService, useClass: EmailService },
      { provide: CepService, useClass: CepService },
      { provide: DataService, useClass: DataService },
      { provide: FormDataService, useClass: FormDataService },
      { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [ AppComponent, NavbarComponent, LocationComponent, PlanComponent, PersonComponent, ResultComponent, PaymentComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}
