import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { EmotionSelectorComponent } from './components/emotion-selector/emotion-selector.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar'; 
import { NoteListComponent } from './components/note-list/note-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { SharedModule } from '../../shared/shared.module';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { EmotionService } from '../../services/emotion.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ReflectionBannerComponent } from './components/reflection-banner/reflection-banner.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    HomeComponent,
    NoteListComponent,
    EmotionSelectorComponent,
    ReflectionBannerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    CalendarModule,
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
    { provide: EmotionService, useClass: EmotionService },
    ToastrService,
    provideHttpClient()
  ]
})
export class HomeModule { }