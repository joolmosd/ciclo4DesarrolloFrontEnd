import { ClientRoutingModule } from './client--routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './../client/create/create.component';
import { EditComponent } from './../client/edit/edit.component';
import { GetComponent } from './../client/get/get.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
