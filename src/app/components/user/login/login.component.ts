import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Users } from 'src/app/models/users';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { isError } from 'util';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location ) { }

  private user: Users = {
    email: '',
    password: ''
  };
  public isError = false;

  ngOnInit() { }

  onLogin(form: NgForm) {
    //if (form.valid) {
      return this.authService
        .loginuser(this.user.email, this.user.password)
        .subscribe(
        data => {
          this.authService.setUser(data.user);
          let token = data.id;
          this.authService.setToken(token);
          this.router.navigate(['/inicio']);
          //location.reload();
          //this.isError = false;
        },
        error => console.log(error)
        );
    } //else {
      //this.onIsError();
    //}
  }

  //onIsError(): void {
    //this.isError = true;
    //setTimeout(() => {
      //this.isError = false;
    //}, 4000);
//}

//}
