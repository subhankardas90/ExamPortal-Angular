import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  categories:any=[];
  quizData={
    title:'',
    description:'',
    maxMarks:'',
    noOfQuestions:'',
    active: true,
    category:{
      cid:''
    },
  }
  constructor(private catService:CategoryService, private snack:MatSnackBar, private quizService:QuizService, public dialogRef: MatDialogRef<AddEventComponent>) { }

  ngOnInit(): void {
    this.catService.categories().subscribe(
      (data:any)=>{
        this.categories = data;
      },
      (error)=>{
        Swal.fire("Error", 'Server Error', 'error'); 
      });
  }

  //Add Quiz

  addEvent(){
      if(this.quizData.title.trim()=='' || this.quizData.title==null){
        this.snack.open("Title Required !!",'',{
          duration:3000 
        });
        return;
      }

    

    //call server
    
    this.quizService.addQuiz(this.quizData).subscribe(
      (data:any)=>{
        this.quizData={
          title:'',
          description:'',
          maxMarks:'',
          noOfQuestions:'',
          active: true,
          category:{
            cid:''
          }}
        this.dialogRef.close();
        Swal.fire("Success", 'Quiz is added Successfully', 'success');
      },
      (error)=>{
        Swal.fire("Error", 'Server Error', 'error'); 
      });

    }

}
