import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent   {

  @ViewChild('loginForm') loginForm; // on fait reference a la variable definie dans le html

  username = 'Bill';
  password = '';

  login() {
     console.log(this.username, this.password);
     console.log(this.loginForm);
  }



}
