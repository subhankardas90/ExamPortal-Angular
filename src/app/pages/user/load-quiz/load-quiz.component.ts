import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {

  catId: any;
  quizes: any;
  constructor(private route: ActivatedRoute, private quizService: QuizService) { }

  ngOnInit(): void {
    //this.catId = this.route.snapshot.params['catId']; // URL wala variable coming from app module
    this.route.params.subscribe((params) => {
      this.catId = params['catId'];  // any change in route , cat id will update
      if (this.catId == 0) {
        // load all quiz
        this.quizService.getActiveQuizes().subscribe(
          (data: any) => {
            this.quizes = data;
          },
          (error) => {
            alert("Error");
          }
        )
      } else {
        // Load specific quiz
        this.quizService.getActiveQuizesOfCategory(this.catId).subscribe(
        (data:any)=>{
          this.quizes=data;
        },
        (error)=>{
          alert("error");
        }
        )
        
      }
    });
  }

}
