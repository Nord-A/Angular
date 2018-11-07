import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-baby',
  templateUrl: './register-baby.component.html',
  styleUrls: ['./register-baby.component.scss']
})
export class RegisterBabyComponent implements OnInit {
  babyForm: any;

  baby: Babygender[] = [
    {value: 'male-0', viewValue: 'Male'},
    {value: 'female-1', viewValue: 'Female'},
    {value: 'other-2', viewValue: 'Other'}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.babyForm = this.fb.group(
      {
        name: ['',Validators.required],
        gender: ['', Validators.required],
        date: ['', Validators.required],
        specialNeeds: ['',Validators.required],
        address: ['', Validators.required],
        zipCode: ['', Validators.required],
        city: ['', Validators.required],
        userName: ['', Validators.required],
        passWord: ['', Validators.required],
      }
    )
  }
  onSubmit(babyForm){
    
    if(babyForm.valid){
      
      alert("valid")
    }else{
     
      alert("invalid")
    }

    console.log(babyForm);

  }
  
}
export interface Babygender {
  value: string;
  viewValue: string;
}
