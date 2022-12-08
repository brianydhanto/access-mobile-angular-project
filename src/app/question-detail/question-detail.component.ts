import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Questions } from '../questions/questions';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {

  data: Questions;
  newAnswer: string;
  questionId: number;
  constructor(
    private appService: AppService, 
    private route: ActivatedRoute
   ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.questionId = +params['id']
        this.get()
      }
    );
  }

  get() {
    this.appService
    .get()
    .subscribe((response) => {
      let dataFiltered = response.filter((i) => {
        return i.question_id == this.questionId
      })

      if (dataFiltered.length > 0) {
        this.data = dataFiltered[0];
      }
    })
  }

  addAnswer() {
    if (this.newAnswer && this.data) {
      this.data.answer.push({
        user_id: 99,
        username: '@anonymous',
        answer_detail: this.newAnswer,
        answer_published: new Date().toLocaleString(),
      });

      this.newAnswer = '';
    }
  }

}
