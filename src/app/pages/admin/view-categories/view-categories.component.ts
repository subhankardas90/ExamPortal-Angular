import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  categories:any=[];
  constructor(private category:CategoryService,public dialog: MatDialog ) { }

  ngOnInit(): void {
    this.category.categories().subscribe((data:any)=>{
      this.categories=data;
      //console.log(this.categories);
    },
    (error)=>{
      Swal.fire("Error","Error in Loading,'error");
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddCategoryComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
