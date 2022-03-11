import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public formRegister!: FormGroup;

  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);
  terms = new FormControl('', Validators.required);


  constructor(private formBuilder : FormBuilder,private authService : AuthService, private cookieService : CookieService, private router : Router) { }

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name :['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
      terms: ['', [Validators.required, Validators.requiredTrue]],

    })
  }

  signUp(){
    const name = this.formRegister.value.name;
    const email = this.formRegister.value.email;
    const password = this.formRegister.value.password;
    this.authService.signUp(email,password).then( (res:any) => {
      console.log("se registro ", res);
   if (email !== false && name !== false && password !== false){
    this.router.navigate(['/'])

   }
    })
  }

}








