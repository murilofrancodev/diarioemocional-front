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
  ]
})
export class NotesModule { }