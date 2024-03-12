import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

  qid: any;

  questions: any;

  markGot: any = 0;
  correctAnswers: any = 0;
  attempted: any = 0;

  isSubmit = false;

  timer: any;

  constructor(private locSt: LocationStrategy, private route: ActivatedRoute, private qnService: QuestionService) { }

  ngOnInit(): void {
    //this.preventBackButton();
    this.qid = this.route.snapshot.params['qid'];
    this.loadQuestions();
  }
  loadQuestions() {
    this.qnService.getQuestionsOfQuizForTest(this.qid).subscribe(
      (data: any) => {
        this.questions = data;

        //load timer in success
        this.timer = this.questions.length * 2 * 60; //questions is a array , questions.length give u no 


        this.questions.forEach((element: any) => {
          element['givenAnswer'] = ''; // Add extar variable in resp
        });
        console.log(this.questions);

        this.startTimer();
      },
      (error) => {
        alert("Error");
      }
    )
  }

  preventBackButton() {
    history.pushState(null, location.href);
    this.locSt.onPopState(() => {
      history.pushState(null, location.href)
    });
  }

  submitQuiz() {
    Swal.fire({
      title: 'Do you want to Submit the quiz',
      showCancelButton: true,
      confirmButtonText: 'Submit',
      icon: 'info'
    }).then((e) => {
      if (e.isConfirmed) {
        this.evalQuiz();
      }

    });
  }

  startTimer() {
    let t: any = window.setInterval(() => {
      if (this.timer <= 0) {
        this.evalQuiz();
        clearInterval(t);
      } else {
        this.timer--;
      }
    }, 1000)
  }

  getFormatedTime() {
    let mm = Math.floor(this.timer / 60);
    let ss = this.timer - mm * 60;
    return `${mm} min : ${ss} seconds`;
  }

  evalQuiz() {
    //Do all calculation
    console.log(this.questions);

    this.isSubmit = true;
    this.questions.forEach((qn: any) => {
      if (qn.givenAnswer == qn.answer) {
        this.correctAnswers++;
        let marksSingle = this.questions[0].quiz.maxMarks / this.questions.length;
        this.markGot += marksSingle;

      }
      if (qn.givenAnswer.trim() != '') {
        this.attempted++;
      }
    });


    console.log("----------->" + this.correctAnswers);
    console.log("----markGot ------->" + this.markGot);
  }

  printPage(){
    window.print(); // to print
  }
 

}
