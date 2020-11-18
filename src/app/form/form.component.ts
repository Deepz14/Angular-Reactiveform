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

  disable = true;

  validate = '';

  userFields = {
    user_name : 'deepak',
    age : 21,
    qualification : ['Elementary', 'Primary', 'Advanced'],
    gender : 'Male',
    city : 'Erode',
    state : ['TN', 'Karnataka', 'Kerala'],
    zip : 638003
  }
   

  constructor() { 
  }

  ngOnInit(): void {
      this.userProfile = new FormGroup({
      user_name : new FormControl({value : this.userFields.user_name, disabled : this.disable}, Validators.required),
      age : new FormControl({value : this.userFields.age, disabled : this.disable}, Validators.required),
      qualification : new FormControl({value : this.userFields.qualification[1], disabled : this.disable}),
      gender : new FormControl({value : this.userFields.gender, disabled : this.disable}, Validators.required),
      city : new FormControl({value : this.userFields.city, disabled : this.disable}, Validators.required),
      state : new FormControl({value : this.userFields.state[0], disabled : this.disable}),
      zip : new FormControl({value : this.userFields.zip, disabled : this.disable}, Validators.required)
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

    this.disable = true;

     this.userProfile.reset({
      user_name : {value : this.userFields.user_name, disabled : this.disable},
      age : {value : this.userFields.age, disabled : this.disable},
      qualification : {value : this.userFields.qualification[1], disabled : this.disable},
      gender : {value : this.userFields.gender, disabled : this.disable},
      city : {value : this.userFields.city, disabled : this.disable},
      state : {value : this.userFields.state[0], disabled : this.disable},
      zip : {value : this.userFields.zip, disabled : this.disable},
    })
   
  }

  onEdit(){
    this.disable = false;

    this.userProfile.reset({
      user_name : {value : this.userFields.user_name, disabled : this.disable},
      age : {value : this.userFields.age, disabled : this.disable},
      qualification : {value : this.userFields.qualification[1], disabled : this.disable},
      gender : {value : this.userFields.gender, disabled : this.disable},
      city : {value : this.userFields.city, disabled : this.disable},
      state : {value : this.userFields.state[0], disabled : this.disable},
      zip : {value : this.userFields.zip, disabled : this.disable},
    })

  }

}
