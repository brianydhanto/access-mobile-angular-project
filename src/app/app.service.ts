import { Injectable }  from '@angular/core'
import { Observable } from 'rxjs'
import { of } from 'rxjs'

@Injectable()
export class AppService {
  data = {
    questions: [
    	{
    		question_id: 1,
    		question_title: 'Question Title 1',
    		question: 'Question detail 1',
    		answer: [
    			{
    				user_id: 2,
    				username: '@username_two',
    				answer_detail: 'Answer detail 1',
    				answer_published: '13/12/2022, 08:00:00 AM'
    			},
    			{
    				user_id: 3,
    				username: '@username_three',
    				answer_detail: 'Answer detail 1',
    				answer_published: '13/12/2022, 09:00:00 AM'
    			},
    			{
    				user_id: 4,
    				username: '@username_four',
    				answer_detail: 'Answer detail 1',
    				answer_published: '13/12/2022, 10:00:00 AM'
    			},
    		],
    		user_id: 1,
    		username: '@username_one',
    		published: '12/12/2022, 08:00:00 AM',
    	},
    	{
    		question_id: 2,
    		question_title: 'Question Title 2',
    		question: 'Question detail 2',
    		answer: [
    			{
    				user_id: 4,
    				username: '@username_four',
    				answer_detail: 'Answer detail 1',
    				answer_published: '12/12/2022, 10:00:00 AM'
    			}
    		],
    		user_id: 2,
    		username: '@username_two',
    		published: '11/12/2022, 09:00:00 AM',
    	},
    	{
    		question_id: 3,
    		question_title: 'Question Title 3',
    		question: 'Question detail 3',
    		answer: [],
    		user_id: 3,
    		username: '@username_three',
    		published: '10/12/2022, 10:00:00 AM',
    	},
    	{
    		question_id: 4,
    		question_title: 'Question Title 4',
    		question: 'Question detail 4',
    		answer: [],
    		user_id: 4,
    		username: '@username_four',
    		published: '09/12/2022, 11:00:00 AM',
    	},
    	{
    		question_id: 5,
    		question_title: 'Question Title 5',
    		question: 'Question detail 5',
    		answer: [],
    		user_id: 5,
    		username: '@username_five',
    		published: '08/12/2022, 12:00:00 AM',
    	}
    ]
  }

  constructor() { }

  get() {
  	return of(this.data.questions)
  }

}