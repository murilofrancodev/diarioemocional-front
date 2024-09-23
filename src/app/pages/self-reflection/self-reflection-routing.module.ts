import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelfReflectionComponent } from './self-reflection.component';

const routes: Routes = [
  { path: '', component: SelfReflectionComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelfReflectionRoutingModule { }

export { routes };