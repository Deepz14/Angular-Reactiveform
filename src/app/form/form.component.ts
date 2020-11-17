import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  userProfile : FormGroup;

  Qualifications : string[] = ['Elementary', 'Primary', 'Advanced']

   default = 'Select';

  constructor() { 
  }

  ngOnInit(): void {
    this.userProfile = new FormGroup({
      user_name : new FormControl('', Validators.required),
      age : new FormControl('', Validators.required),
      qualification : new FormControl(['']),
      gender : new FormControl('Male', Validators.required)
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
  }

}
