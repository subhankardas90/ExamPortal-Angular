import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  qid:any;
  quiz:any;

  constructor(private route:ActivatedRoute, private quizService: QuizService, private router:Router) { }  // to read data from URL

  ngOnInit(): void {
     this.qid= this.route.snapshot.params['qid'];

     this.quizService.getQuiz(this.qid).subscribe(
       (data:any)=>{
        this.quiz=data;
       },
       (error)=>{
        alert("Error");
       }
     )
     
  }
  startQuiz(){
    Swal.fire({
      title: 'Do you want to start the quiz',
      showCancelButton: true,
      confirmButtonText: 'Start',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        this.router.navigate(['/start/'+this.qid]);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

}
