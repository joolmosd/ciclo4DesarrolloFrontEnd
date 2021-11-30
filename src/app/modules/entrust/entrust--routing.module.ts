import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './../entrust/create/create.component';
import { EditComponent } from './../entrust/edit/edit.component';
import { GetComponent } from './../entrust/get/get.component';



const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit',
    component: EditComponent,
  },
  {
    path: 'get',
    component: GetComponent,
  },
  {
    path: '',
    redirectTo:'get',
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EntrustRoutingModule { }
