import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-editor',
  templateUrl: './modal-editor.component.html',
  styleUrls: ['./modal-editor.component.scss']
})
export class ModalEditorComponent {
  @Input() isOpen: boolean = false; 
  @Input() selectedEmotion: string = ''; 
  @Output() closeModal = new EventEmitter<void>(); 
  @Output() noteSaved = new EventEmitter<string>(); 

  noteContent: string = ''; 

  close() {
    this.isOpen = false; 
    this.closeModal.emit(); 
  }

  saveNote() {
    if (this.noteContent.trim()) {
      this.noteSaved.emit(this.noteContent);
      this.noteContent = ''; 
      this.close();
    } else {
      alert('Por favor, escreva algo antes de salvar.'); 
    }
  }
}