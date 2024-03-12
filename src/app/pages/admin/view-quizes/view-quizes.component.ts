import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizes',
  templateUrl: './view-quizes.component.html',
  styleUrls: ['./view-quizes.component.css']
})
export class ViewQuizesComponent implements OnInit {

  quizes:any = [];
  constructor(private quizService:QuizService) { }

  ngOnInit(): void {
    this.quizService.quizes().subscribe((data:any)=>{
      this.quizes=data;
      //console.log(this.categories);
    },
    (error)=>{
      Swal.fire("Error","Error in Loading,'error");
    });
  }

  //Delete Quiz
  deleteQuiz(qid:any){
    Swal.fire({
      icon: 'info',
      title:'Are you sure ?',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result)=>{
      if(result.isConfirmed){
        this.quizService.deleteQuiz(qid)
        .subscribe((data:any)=>{
          this.quizes = this.quizes.filter((quiz:any)=> quiz.qid != qid);  // filter tabhi kar na jab current qid not equal with qid
          Swal.fire("Success","Deleted Successfully'success");
        },
        (error)=>{
          Swal.fire("Error","Error in Loading,'error");
        });
      }
    })

  }

}
