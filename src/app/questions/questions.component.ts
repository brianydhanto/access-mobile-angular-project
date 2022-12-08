import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  data = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService
    .get()
    .subscribe((response) => {
      this.data = response;
    });
  }

}
