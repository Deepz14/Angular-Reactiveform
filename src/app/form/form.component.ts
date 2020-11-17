import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userProfile : FormGroup;

  submitted = false;

  validate = '';

  Qualifications : string[] = ['Elementary', 'Primary', 'Advanced']

  States : string[] = ['Usa','Canada','France']

   

  constructor() { 
  }

  ngOnInit(): void {
    this.userProfile = new FormGroup({
      user_name : new FormControl('', Validators.required),
      age : new FormControl('', Validators.required),
      qualification : new FormControl([null]),
      gender : new FormControl('Male', Validators.required),
      city : new FormControl('', Validators.required),
      state : new FormControl([null]),
      zip : new FormControl('', Validators.required),
      agree : new FormControl('', Validators.required)
    })
  }

  get f(){
    return this.userProfile.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.userProfile.invalid){
      this.validate = 'is-invalid'
      return;
    }

    console.log(this.userProfile.value);

  }

  onClear(){
    this.submitted = false;
    this.userProfile.reset()
  }

}
