import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-sitter',
  templateUrl: './register-sitter.component.html',
  styleUrls: ['./register-sitter.component.scss']
})
export class RegisterSitterComponent implements OnInit {
  sitterForm: any;

  sitter: Sittergender[] = [
    {value: '0', viewValue: 'Male'},//male-0
    {value: '1', viewValue: 'Female'},//female-1
    {value: '2', viewValue: 'Other'}//other-2
  ];

  criminal: Criminalrecord[] = [
    {value: 'no-0', viewValue: 'No'},
    {value: 'yes-1', viewValue: 'Yes'},
    
  ];

  child: Childrecord[] = [
    {value: 'no-0', viewValue: 'No'},
    {value: 'yes-1', viewValue: 'Yes'},
    
  ];
  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.sitterForm = this.fb.group(
      {
        name: ['',Validators.required],
        gender: ['', Validators.required],
        date: ['',Validators.required],
        criminalRecord: ['',Validators.required],
        childRecord: ['', Validators.required],
        hourlyWage: ['', Validators.required],
        address: ['', Validators.required],
        zipCode: ['', Validators.required],
        city: ['', Validators.required],
        userName: ['', Validators.required],
        passWord: ['', Validators.required]
       
      }
    )
  }
  onSubmit(sitterForm){
    
    if(sitterForm.valid){
      this.router.navigate(["/home/login"]);
    }else{
     
      alert("invalid")
    }

    console.log(sitterForm);

  }
}
export interface Sittergender {
  value: string;
  viewValue: string;
}
export interface Criminalrecord {
  value: string;
  viewValue: string;
}
export interface Childrecord {
  value: string;
  viewValue: string;
}
