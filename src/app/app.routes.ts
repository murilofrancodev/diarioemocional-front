import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideAuth } from '@angular/fire/auth';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { environment } from '../environments/environment';
const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, 
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'notes', loadChildren: () => import('./pages/notes/notes.module').then(m => m.NotesModule) },
  { path: 'self-reflection', loadChildren: () => import('./pages/self-reflection/self-reflection.module').then(m => m.SelfReflectionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule],
  providers: [
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth())
  ],
})
export class AppRoutingModule { }

export { routes };