import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note-editor',
  templateUrl: './note-editor.component.html',
  styleUrls: ['./note-editor.component.scss']
})
export class NoteEditorComponent {
  @Input() noteContent: string = ''; 
  @Output() noteContentChange = new EventEmitter<string>(); 
  @Output() noteSaved = new EventEmitter<string>(); 

  onContentChange(content: string) {
    this.noteContentChange.emit(content);
  }

  saveNote() {
    if (this.noteContent.trim()) { 
      this.noteSaved.emit(this.noteContent); 
      this.noteContent = '';
    } else {
      alert('Por favor, escreva algo antes de salvar.'); 
    }
  }
}