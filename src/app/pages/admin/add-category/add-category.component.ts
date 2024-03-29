import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import {
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {
  category={
    title:'',
    description:'',
  }

  constructor(private _category:CategoryService, private snack:MatSnackBar, private router: Router, public dialogRef: MatDialogRef<AddCategoryComponent>) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.category.title.trim()=='' || this.category.title==null){
      this.snack.open("Title Required !!",'',{
        duration:3000 
      });
      return;
    }
    this._category.addCategory(this.category).subscribe(
      (data:any)=>{
        this.category.title='';
        this.category.description='';
        this.router.navigate(['categories']);
        this.dialogRef.close();
        Swal.fire("Success", 'Category is added Successfully', 'success');
      },
      (error)=>{
        Swal.fire("Error", 'Server Error', 'error'); 
      });
  }



}
