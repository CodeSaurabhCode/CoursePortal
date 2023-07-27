import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required),

  })

  constructor( private router:Router, private user: UserService){}

  onSubmit(){
      if (this.loginForm.valid) {
        const formValues = this.loginForm.value;
        this.user.login(formValues.email, formValues.password)
        this.router.navigateByUrl('/')
      } 
  }

}
