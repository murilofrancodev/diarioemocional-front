import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal-editor',
  templateUrl: './modal-editor.component.html',
  styleUrls: ['./modal-editor.component.scss']
})
export class ModalEditorComponent {

  constructor(private toastr: ToastrService) {}
  
  @Input() isOpen: boolean = false; 
  @Input() selectedEmotion: string = ''; 
  @Input() selectedEmoji: string = '';
  @Output() closeModal = new EventEmitter<void>(); 
  @Output() noteSaved = new EventEmitter<{ emotion: string, note: string }>();

  noteContent: string = ''; 

  close() {
    this.isOpen = false; 
    this.closeModal.emit(); 
  }

  saveNote() {
    if (this.noteContent.trim()) {
      this.noteSaved.emit({ emotion: this.selectedEmotion, note: this.noteContent }); 
      this.noteContent = ''; 
      this.close();
    } else {
      this.toastr.warning('Por favor, escreva algo antes de salvar.'); 
    }
  }
}