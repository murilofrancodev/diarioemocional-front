import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 
import { SharedModule } from '../../shared/shared.module';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';
import { EmotionService } from '../../services/emotion.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CalendarListComponent } from './components/calendar-list/calendar-list.component';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CalendarRoutingModule,
    NgbModule,
    SharedModule,
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
export class CalendarModule { }