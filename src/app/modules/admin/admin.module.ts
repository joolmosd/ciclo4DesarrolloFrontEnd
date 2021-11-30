import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin--routing.module';
import { CreateComponent } from './Users/create/create.component';
import { EditComponent } from './Users/edit/edit.component';
import { GetComponent } from './Users/get/get.component';



@NgModule({
  declarations: [
    CreateComponent,
    EditComponent,
    GetComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
