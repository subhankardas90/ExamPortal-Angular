import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http:HttpClient) { }

  public getQuestionsOfQuiz(quizID:any){ //used by admin
    return this.http.get(`${baseUrl}/question/quiz/all/${quizID}`);
  }

  public getQuestionsOfQuizForTest(quizID:any){
    return this.http.get(`${baseUrl}/question/quiz/${quizID}`);
  }  


  public addQuestion(question:any){
    return this.http.post(`${baseUrl}/question/`,question);
  }

  public deleteQuestion(questionId:any){
    return this.http.delete(`${baseUrl}/question/${questionId}`);
  }

}
