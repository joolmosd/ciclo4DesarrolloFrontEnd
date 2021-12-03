import { LogOutComponent } from './log-out/log-out.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecurityRoutingModule } from './security--routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    ChangePasswordComponent,
    RecoverPasswordComponent,
    LogOutComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SecurityModule { }
