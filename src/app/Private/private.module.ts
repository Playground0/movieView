import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { WorkshopComponent } from './components/workshop/workshop.component';


@NgModule({
  declarations: [
    AdminProfileComponent,
    WorkshopComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule
  ]
})
export class PrivateModule { }
