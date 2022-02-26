import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationRoutingModule } from './noauth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LoginformComponent } from './login/loginform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterformComponent } from './register/registerform.component';
import { AuthLayoutComponent } from './no-auth-layout/no-auth-layout.component';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    LoginformComponent,
    RegisterformComponent,
    AuthLayoutComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    NgbModule,
    ShowHidePasswordModule,
  ],
})
export class AuthenticationModule {}