import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmotionAudioComponent } from './emotion-audio.component';

const routes: Routes = [
  { path: '', component: EmotionAudioComponent } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmotionAudioRoutingModule { }

export { routes };