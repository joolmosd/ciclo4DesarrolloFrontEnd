import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetComponent } from './../entrust/get/get.component';
import { EditComponent } from './../entrust/edit/edit.component';
import { CreateComponent } from './../entrust/create/create.component';
import { EntrustRoutingModule } from './entrust--routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    EntrustRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EntrustModule { }
