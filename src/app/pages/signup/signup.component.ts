import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private usersService:UserService, private snack:MatSnackBar) { }

  public user={
    userName:'',
    password:'',
    firstName:'',
    lastName:'',
    email:'',
    phone:''

  };

  ngOnInit(): void {
  }
  formSubmit() {
    if(this.user.userName == '' || this.user.userName == null) {
      //alert('User is required');
      this.snack.open('User Name is Required','', {
        duration:3000,
        verticalPosition:'top',
        //horizontalPosition:'right'
      });
      return;
    }
    //add User:userService
    this.usersService.addUser(this.user).subscribe(
      (data:any) =>{
        console.log(data);
       // alert("Success");
       Swal.fire('Success', 'User is Registered Successfully with id : ' +data.id,'success');

      },
      (error) => {
        console.log(error);
        //alert("Something went wrong");
        this.snack.open('Something went wrong !!' , '', {
          duration:3000
        })
      }
    );

  }

}
