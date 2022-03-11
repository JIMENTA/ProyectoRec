import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);


  constructor( private authService : AuthService, private cookieService : CookieService, private router : Router) { }

  ngOnInit(): void {
  }



  signIn(){
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;
    this.authService.login(email,password).then( (res:any) => {
      console.log("se registro ", res);
      this.cookieService.set('token_access', res.accessToken, 4,'/');
      this.router.navigate(['/'])
    })
  }

  logInWithGoogle(){
    const email = this.myForm.value.email;
    const password = this.myForm.value.password;
    this.authService.loginWithGoogle(email,password).then( res => {
      console.log("se registro ", res)
    })
  }

  logOut(){
    this.authService.logOut();
  }
}
