import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'passwordd',
  templateUrl: './passwordd.component.html',
  styleUrls: ['./passwordd.component.css']
})
export class PassworddComponent{
  form:FormGroup;

  constructor(fb: FormBuilder){
    this.form = fb.group({
      oldPassword: ['',
      Validators.required,
      PasswordValidators.validOldPassword],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },{
      validator: PasswordValidators.passwordsShouldMatch
    });
    
  
  }


  get oldPassword(){
    return this.form.get('oldPassword');
  }
  get newPassword(){
    return this.form.get('newPassword');
  }
  get confirmPassword(){
    return this.form.get('confirmPassword');
  }


}
