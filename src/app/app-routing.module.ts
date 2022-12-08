import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionDetailComponent } from './question-detail/question-detail.component';


const routes: Routes = [
	{path: '', pathMatch: 'full', redirectTo: 'questions'},
    {path: 'questions' , component: QuestionsComponent},
    {path: 'questions/:id' , component: QuestionDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }