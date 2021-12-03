import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { GetComponent } from './get/get.component';
import { ServiceRoutingModule } from './service--routing.module';

@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
