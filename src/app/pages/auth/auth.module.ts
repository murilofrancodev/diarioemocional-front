import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MessageDialogComponent } from '../../shared/components/message-dialog/message-dialog.component';
import { LogoAuthComponent } from './components/logo-auth/logo-auth.component';
import { PinAuthComponent } from './components/pin-auth/pin-auth.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { AuthService } from '../../services/auth.service';
import { provideHttpClient } from '@angular/common/http';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    MessageDialogComponent, 
    LogoAuthComponent,
    PinAuthComponent,
    OnboardingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule,
    MatDialogModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }) 
  ],
  providers: [
    { provide: AuthService, useClass: AuthService },
    provideHttpClient(),
    ToastrService
  ]
})
export class AuthModule { }