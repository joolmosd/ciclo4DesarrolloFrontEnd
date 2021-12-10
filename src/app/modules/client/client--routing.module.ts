import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionGuard } from 'src/app/guards/session.guard';
import { CreateComponent } from './../client/create/create.component';
import { EditComponent } from './../client/edit/edit.component';
import { GetComponent } from './../client/get/get.component';
;


const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent,
  },
  {
    path: 'edit/:id',
    component: EditComponent,
    canActivate: [SessionGuard]

  },
  {
    path: 'get',
    component: GetComponent,
    canActivate: [SessionGuard]

  },
  {
    path: '',
    redirectTo:'get',
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
