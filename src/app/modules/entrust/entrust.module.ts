import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetComponent } from './../entrust/get/get.component';
import { EditComponent } from './../entrust/edit/edit.component';
import { CreateComponent } from './../entrust/create/create.component';
import { EntrustRoutingModule } from './entrust--routing.module';




@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    EntrustRoutingModule
  ]
})
export class EntrustModule { }
