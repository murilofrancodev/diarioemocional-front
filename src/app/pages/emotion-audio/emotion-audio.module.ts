import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmotionAudioComponent } from './emotion-audio.component';
import { EmotionSelectorComponent } from './components/emotion-selector/emotion-selector.component';
import { NoteAudioComponent } from './components/note-audio/note-audio.component';
import { EmotionAudioRoutingModule } from './emottion-audio-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { SharedModule } from '../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [
    EmotionAudioComponent,
    EmotionSelectorComponent,
    NoteAudioComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    EmotionAudioRoutingModule,
    NgbModule,
    SharedModule,
    MatIconModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', 
      preventDuplicates: true,
  })
  ],
  providers: [
    { provide: AuthService, useClass: AuthService },
    provideHttpClient(),
    ToastrService
  ]
})
export class EmotionAudioModule { }