import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note-audio',
  templateUrl: './note-audio.component.html',
  styleUrls: ['./note-audio.component.scss']
})
export class NoteAudioComponent {
  @Input() noteContent: string = ''; 
  @Output() noteContentChange = new EventEmitter<string>(); 
  @Output() noteSaved = new EventEmitter<string>(); 

  isRecording: boolean = false; 

  onContentChange(content: string) {
    this.noteContentChange.emit(content);
  }

  startRecording() {
    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = 'pt-BR'; 
    recognition.interimResults = false;

    recognition.onstart = () => {
      this.isRecording = true;
    };

    recognition.onresult = (event: any) => {
      this.noteContent = event.results[0][0].transcript; 
      this.isRecording = false; 
    };

    recognition.onerror = (event: any) => {
      console.error('Erro de reconhecimento de voz:', event.error);
      this.isRecording = false;
    };

    recognition.onend = () => {
      this.isRecording = false;
    };

    recognition.start();
  }
}