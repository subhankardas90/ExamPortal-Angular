import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {

  
  qId:any;
  qTitle:any;
  question:any={
    quiz:{

    },
    content:'',
    option1:'',
    option2:'',
    option3:'',
    option4:'',
    answer:''
  };
  constructor(private route:ActivatedRoute, private qnservice:QuestionService) { } // toget theurl qid value

  ngOnInit(): void {
    this.qId = this.route.snapshot.params['qid'];
    this.qTitle = this.route.snapshot.params['title'];
    this.question.quiz['qid'] = this.qId; // to put the qid in quiz

  }
  formSubmit(){
    if(this.question.content.trim()=='' || this.question.content== null) {
      return;
    }

    //Do it for other field

    this.qnservice.addQuestion(this.question).subscribe((data:any)=>{
      this.question={
        quiz:{

        },
        content:'',
        option1:'',
        option2:'',
        option3:'',
        option4:'',
        answer:''
      }
      Swal.fire("Success", 'Question is added Successfully', 'success');
    },
    (error)=>{
      Swal.fire("Error", 'Server Error', 'error'); 
    });

}}
