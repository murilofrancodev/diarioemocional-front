import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { OnboardingComponent } from './components/onboarding/onboarding.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PinAuthComponent } from './components/pin-auth/pin-auth.component';

const routes: Routes = [
  { path: '', component: AuthComponent, children: [
    { path: 'onboarding', component: OnboardingComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'pin', component: PinAuthComponent },
    { path: '', redirectTo: 'onboarding', pathMatch: 'full' }
  ] } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }