export interface Questions {
    question_id: number,
	question_title: string,
	question: string,
	answer: Array<Answer>,
	user_id: number,
	username: string,
	published: string,
}

interface Answer {
  user_id: number,
  username: string,
  answer_detail: string,
  answer_published: string,
}