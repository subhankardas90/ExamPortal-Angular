import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStausSubject=new Subject<boolean>();

  constructor(private http:HttpClient) { }

  //Get Current User Details
  public getCurrentUser(){
    return this.http.get(`${baseUrl}/current-user`);
  }

  //Generate Token
  public generateToken(loginData:any){
    return this.http.post(`${baseUrl}/generate-token`,loginData);
  }

  //Login user : Set token in local Storage
  public loginUser(token:any) {
    localStorage.setItem("token", token);
    return true;
  }

  // user is logged in or not
  public isLoggedIn()
  {
    let tokenStr = localStorage.getItem("token");
    if(tokenStr==undefined || tokenStr == '' || tokenStr==null) {
      return false;
    }else{
      return true;
    }
  }

  //Logout: Remove token fom Storage
  public logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    return true;
  }

  //get Token
  public getToken(){
    return localStorage.getItem("token");
  }

  //Set Userdetail
  public setUser(user:any){
    localStorage.setItem("user",JSON.stringify(user));
  }

  //getUser
  public getUser(){
    let userStr = localStorage.getItem("user");
    if(userStr!=null) {
      return JSON.parse(userStr);
    } else{
      this.logout();
      return null;
    }
  }

  //get UserRole

  public getUserRole(){
    let user = this.getUser();
    return user.authorities[0].authority; 

  }

}
