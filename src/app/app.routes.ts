import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, 
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),  canActivate: [AuthGuard] },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'self-reflection', loadChildren: () => import('./pages/self-reflection/self-reflection.module').then(m => m.SelfReflectionModule), canActivate: [AuthGuard] },
  { path: 'emotion-audio', loadChildren: () => import('./pages/emotion-audio/emotion-audio.module').then(m => m.EmotionAudioModule), canActivate: [AuthGuard] },
  { path: 'calendar', loadChildren: () => import('./pages/calendar/calendar.module').then(m => m.CalendarModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],
})
export class AppRoutingModule { }

export { routes };