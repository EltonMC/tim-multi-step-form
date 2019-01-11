import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

/* App Root */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

/* Feature Components */
import { LocationComponent } from './location/location.component';
import { PlanComponent } from './plan/plan.component';
import { PersonComponent } from './person/person.component';
import { ResultComponent } from './result/result.component';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';

/* Shared Service */
import { FormDataService } from './data/formData.service';
import { WorkflowService } from './workflow/workflow.service';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
    imports:      [ BrowserModule,
                    FormsModule,
                    AppRoutingModule,
                    NgxMaskModule.forRoot()
                  ],
    providers:    [{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService }],
    declarations: [ AppComponent, NavbarComponent, LocationComponent, PlanComponent, PersonComponent, ResultComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}
