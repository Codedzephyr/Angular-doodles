import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
contactMethods = [
  {id:1, name: 'Email'},
  {id:2, name: 'Email'},
  {id:3, name: 'Email'},
  {id:4, name: 'Email'},
]
  log(x:any) {console.log(x);}
  ngOnInit(): void {
  }
  submit(f:any){
    console.log(f)
  }

}
