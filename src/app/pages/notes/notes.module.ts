import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotesComponent } from './notes.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { EmotionSelectorComponent } from './components/emotion-selector/emotion-selector.component';
import { NoteEditorComponent } from './components/note-editor/note-editor.component';
import { NotesRoutingModule } from './notes-routing.module';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar'; 
import { NoteListComponent } from './components/note-list/note-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { SharedModule } from '../../shared/shared.module';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@NgModule({
  declarations: [
    NotesComponent,
    CalendarComponent,
    EmotionSelectorComponent,
    NoteEditorComponent,
    NoteListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NotesRoutingModule,
    CalendarModule,
    NgbModule,
    SharedModule
  ],
  providers: [
    { provide: AuthService, useClass: AuthService },
    provideHttpClient()
  ]
})
export class NotesModule { }