import { animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route:ActivatedRoute, private quizService:QuizService, private catService:CategoryService,private router:Router) { }

  qId=0;
  quiz:any;
  categories:any;
  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qid']; //variable value qid
    //alert(this.qId); 
    this.quizService.getQuiz(this.qId).subscribe(
      (data:any)=>{
        this.quiz=data;
      },
      (error)=>{
        Swal.fire("Error","Error in Loading,'error");
      }
    );
    this.catService.categories().subscribe((data:any)=>{
      this.categories=data;
    },(error)=>{
      Swal.fire("Error","Error in Loading,'error");
    });
  } 

  //Update Form
  public updateData(){
    // TODO : validate
    
    this.quizService.updateQuiz(this.quiz).subscribe((data:any)=>{
      Swal.fire("Updated !!","Quiz Updated Successfully,'success").then((navigateToUpdate)=>{
        this.router.navigate(['/admin/quizes']); // forcefully navigate
      });
    },
    (error)=>{
      Swal.fire("Error","Error in Loading,'error");
    });
  }

}
