import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component'; 
import { MatIconModule } from '@angular/material/icon';
import { ModalEditorComponent } from './components/modal-editor/modal-editor.component';  
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, ModalEditorComponent],
  imports: [CommonModule, MatIconModule, FormsModule, RouterModule],
  exports: [HeaderComponent, ModalEditorComponent] 
})
export class SharedModule {}