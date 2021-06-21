import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  signInForm: FormGroup

  constructor() { }

  ngOnInit() {


    this.signInForm = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl('')
    })
  }

  onSubmit(){

    console.log(this.signInForm.value);
  }


  autoFillData(){
    
    alert('Auto populated data successfully');
    this.signInForm.controls['email'].setValue('Haseeb');  
    this.signInForm.controls['pass'].setValue('123456');
  }






}
