import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SelfReflectionRoutingModule } from './self-reflection-routing.module';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { QuestionComponent } from './components/question/question.component';
import { SharedModule } from '../../shared/shared.module';
import { SelfReflectionComponent } from './self-reflection.component';
import { provideHttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth.service';

@NgModule({
  declarations: [
    ProgressBarComponent,
    QuestionComponent,
    SelfReflectionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SelfReflectionRoutingModule,
    SharedModule
  ],
  providers: [
    { provide: AuthService, useClass: AuthService },
    provideHttpClient()
  ]
})
export class SelfReflectionModule { }