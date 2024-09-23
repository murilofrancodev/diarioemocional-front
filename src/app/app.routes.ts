import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageDialogComponent } from './shared/components/message-dialog/message-dialog.component';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' }, 
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'notes', loadChildren: () => import('./pages/notes/notes.module').then(m => m.NotesModule) },
  { path: 'self-reflection', loadChildren: () => import('./pages/self-reflection/self-reflection.module').then(m => m.SelfReflectionModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export { routes };