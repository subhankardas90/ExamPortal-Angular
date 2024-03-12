import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-questions',
  templateUrl: './view-questions.component.html',
  styleUrls: ['./view-questions.component.css']
})
export class ViewQuestionsComponent implements OnInit {

  qId:any;
  qTitle:any;

  questions:any = [];
  constructor(private _route:ActivatedRoute, private questinService:QuestionService) { }

  ngOnInit(): void {
    this.qId = this._route.snapshot.params['qid'];
    this.qTitle = this._route.snapshot.params['title'];
    
    this.questinService.getQuestionsOfQuiz(this.qId).subscribe((data)=>{
      this.questions = data;
      console.log(this.questions);
    },
    (error)=>{
      Swal.fire("Error","Error in Loading,'error");
    }
    )

  }

  deleteQuestion(qid:any){
    Swal.fire({
      icon:'info',
      showCancelButton:true,
      confirmButtonText:'Delete',
      title:'Are you sure you want to delete this question',
    }).then((result)=>{
      if(result.isConfirmed){
        this.questinService.deleteQuestion(qid).subscribe(
          (data)=>{
            this.questions = this.questions.filter((qn:any)=> qn.quesId != qid); 
            Swal.fire("Success","Deleted Successfully'success");
          },
          (error)=>{
            Swal.fire("Error","Deleted Error'error");
          }
        )
      }
    });
  }

}
