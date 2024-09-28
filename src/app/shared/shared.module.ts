import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component'; 
import { MatIconModule } from '@angular/material/icon';
import { ModalEditorComponent } from './components/modal-editor/modal-editor.component';  
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app.routes';
import { RouterModule } from '@angular/router';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { LoadingComponent } from './components/loading/loading.component';
import { HeaderTopComponent } from './components/header-top/header-top.component';

@NgModule({
  declarations: [HeaderComponent, ModalEditorComponent, LoadingComponent, HeaderTopComponent],
  imports: [CommonModule, MatIconModule, FormsModule, RouterModule, 
    ToastrModule.forRoot({
      positionClass: 'toast-top-right', 
      preventDuplicates: true,
  })
  ],
  exports: [HeaderComponent, ModalEditorComponent, LoadingComponent, HeaderTopComponent],
  providers: [ToastrService]
})
export class SharedModule {}