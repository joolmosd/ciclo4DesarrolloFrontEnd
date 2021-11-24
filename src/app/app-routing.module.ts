import { LogOutComponent } from './modules/security--routing/log-out/log-out.component';
import { IndexComponent } from './components/index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LoginComponent } from './modules/security--routing/login/login.component';

const routes: Routes = [
  {
    path: 'security',
    loadChildren: () => import('./modules/security--routing/security--routing.module').then(m => m.SecurityRoutingModule)
  },{
    path: 'admin',
    loadChildren: () => import('./modules/admin--routing/admin--routing.module').then(m => m.AdminRoutingModule)
  },{
    path: 'entrust',
    loadChildren: () => import('./modules/entrust/entrust.module').then(m => m.EntrustModule)
  },

  {
    path: 'index',
    component: IndexComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/index'
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: "logout",
    component: LogOutComponent,
  },
  {
    path: 'error',
    component: NotFoundComponent,
  }, {
    path: '**',
    redirectTo: '/error'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
