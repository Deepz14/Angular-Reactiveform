import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userProfile : FormGroup;

  validate = '';

  Qualifications : string[] = ['Elementary', 'Primary', 'Advanced']

  States : string[] = ['Usa','Canada','France']

   

  constructor() { 
  }

  ngOnInit(): void {
    this.userProfile = new FormGroup({
      user_name : new FormControl('', Validators.required),
      age : new FormControl('', Validators.required),
      qualification : new FormControl(['']),
      gender : new FormControl('Male', Validators.required),
      city : new FormControl(''),
      state : new FormControl(['']),
      zip : new FormControl(''),
      agree : new FormControl('')
    })
  }

  onSubmit(){
    if(!this.userProfile.valid){
      window.alert('Fields cannot be Empty...')
    
    }
    else{
      console.log(this.userProfile.value);

    }
  }

  onClear(){
    this.userProfile.reset()
    if(!this.userProfile.valid){
      this.validate = "is-invalid"
    }
    else{
      this.validate = "is-valid"
    }
  }

}
