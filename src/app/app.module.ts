import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';

import { AppService } from './app.service';
import { AppRoutingModule } from './app-routing.module';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    QuestionDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
  	AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
