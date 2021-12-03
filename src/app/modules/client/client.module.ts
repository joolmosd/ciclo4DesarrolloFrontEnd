import { ClientRoutingModule } from './client--routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './../client/create/create.component';
import { EditComponent } from './../client/edit/edit.component';
import { GetComponent } from './../client/get/get.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ClientModule { }
