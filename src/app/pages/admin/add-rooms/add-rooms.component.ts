import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-rooms',
  templateUrl: './add-rooms.component.html',
  styleUrls: ['./add-rooms.component.css']
})
export class AddRoomsComponent implements OnInit {

  category={
    title:'',
    description:'',
  }

  constructor(private _category:CategoryService, private snack:MatSnackBar, private router: Router, public dialogRef: MatDialogRef<AddRoomsComponent>) { }

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
