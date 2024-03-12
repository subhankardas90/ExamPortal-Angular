import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http:HttpClient) { }

  public quizes(){
    return this.http.get(`${baseUrl}/quiz/`);
  }

  // Add quiz 
  public addQuiz(quiz:any){
    return this.http.post(`${baseUrl}/quiz/`,quiz);
  }

  // Delete quiz 
  public deleteQuiz(qid:any){
    return this.http.delete(`${baseUrl}/quiz/${qid}`);
  }

  //get Single quiz
  public getQuiz(qId:any){
    return this.http.get(`${baseUrl}/quiz/${qId}`);
  }

  //Update 
  public updateQuiz(quiz:any){
    return this.http.put(`${baseUrl}/quiz/`,quiz);
  }

  //get Quizes of Category
  public getQuizesOfCategory(cid:any){
    return this.http.get(`${baseUrl}/quiz/category/${cid}`);
  }

  //get Active Quizes 
  public getActiveQuizes(){
    return this.http.get(`${baseUrl}/quiz/active`);
  }

  //get Active Quizes  of category
  public getActiveQuizesOfCategory(cid:any){
    return this.http.get(`${baseUrl}/quiz/category/active/${cid}`);
  }
}
