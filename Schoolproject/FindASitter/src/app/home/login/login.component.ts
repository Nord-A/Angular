import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: any;

  constructor(private fb: FormBuilder,private router: Router, private authservice: AuthService) { }
  ngOnInit() {
    this.loginForm = this.fb.group(
      {
        username: ['',[Validators.required, Validators.minLength(5)]],
        password: ['', Validators.required],
      }
    )
  }
  onSubmit(loginForm){
   
    
    if(loginForm.valid){
      this.authservice.login().subscribe(result =>{
        this.router.navigate(['/portal']);
      })
      
      
    }else{
     
      
    }

    console.log(loginForm);

  }
}
