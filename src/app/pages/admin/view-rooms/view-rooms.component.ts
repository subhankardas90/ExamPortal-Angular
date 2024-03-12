import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { AddRoomsComponent } from '../add-rooms/add-rooms.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-rooms',
  templateUrl: './view-rooms.component.html',
  styleUrls: ['./view-rooms.component.css']
})
export class ViewRoomsComponent implements OnInit {
  categories:any=[];
  constructor(private category:CategoryService,public dialog: MatDialog) { }

  ngOnInit(): void {

    this.category.categories().subscribe((data:any)=>{
      this.categories=data;
      // console.log(this.categories);
    },
    (error)=>{
      Swal.fire("Error","Error in Loading,'error");
    });
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddRoomsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
