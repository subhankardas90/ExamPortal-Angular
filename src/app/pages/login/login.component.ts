import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginData={
    userName:'',
    password:''
  }

  constructor( private snack:MatSnackBar, private login:LoginService, private router:Router) { }

  ngOnInit(): void {
  }

  formSubmit(){
    if(this.loginData.userName.trim() =='' && this.loginData.userName == null) {
      this.snack.open("User Name is required",'',{
        duration:3000,
      });
      return;
    }
    if(this.loginData.password.trim() =='' && this.loginData.password ==null) {
      this.snack.open("Password is required",'',{
        duration:3000,
      });
      return;
    }

    this.login.generateToken(this.loginData).subscribe(
      
      (data:any)=>{
        console.log("Success");
        console.log(data);

        //Do Login
        this.login.loginUser(data.token);
        this.login.getCurrentUser().subscribe(
          (user:any)=>{
            this.login.setUser(user);
            console.log(user);

            //Redirect Admin Dashboard or Normal Dash board
            if(this.login.getUserRole()=="ADMIN"){// goto Admin DAshboard
              //window.location.href='/admin';
              this.router.navigate(['admin']);
              this.login.loginStausSubject.next(true);
            }else if(this.login.getUserRole()=="NORMAL") {
              //window.location.href='/user-dashboard';
              this.router.navigate(['user-dashboard/0']); // /0 bcoz when it go to user load all th quiz
              this.login.loginStausSubject.next(true);
            } else{
              this.login.logout();
              //location.reload;
            }

          }
        )
      },
      (error)=>{
        console.log(error);
        this.snack.open("Invalid Details !!  Try again",'',{
          duration:3000
        })
      }
    );
   
  }

}
