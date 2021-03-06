import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocationComponent } from './location/location.component';
import { PlanComponent } from './plan/plan.component';
import { PersonComponent } from './person/person.component';
import { ResultComponent } from './result/result.component';
import { PaymentComponent } from './payment/payment.component';

import { WorkflowGuard } from './workflow/workflow-guard.service';
import { WorkflowService } from './workflow/workflow.service';
import { NgxMaskModule } from 'ngx-mask';


export const appRoutes: Routes = [
    // 1st Route
    { path: 'location',  component: LocationComponent },
    // 2nd Route
    { path: 'plan',  component: PlanComponent, canActivate: [WorkflowGuard] },
    // 3rd Route
    { path: 'person',  component: PersonComponent, canActivate: [WorkflowGuard] },
    // 4th Route
    { path: 'payment',  component: PaymentComponent, canActivate: [WorkflowGuard] },
    // 5th Route
    { path: '',   redirectTo: '/location', pathMatch: 'full' },
    // 6th Route
    { path: '**', component: LocationComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { useHash: true} ),
    NgxMaskModule.forRoot()
  ],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule {}
