import { IndexComponent } from './components/index/index.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
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
    path: 'security',
    loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule)
  },{
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule)
  },{
    path: 'entrust',
    loadChildren: () => import('./modules/entrust/entrust.module').then(m => m.EntrustModule)
  },
  {path: 'client',
    loadChildren: () => import('./modules/client/client.module').then(m => m.ClientModule)
  },
  {path: 'service',
    loadChildren: () => import('./modules/service/service.module').then(m => m.ServiceModule)
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
