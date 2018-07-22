import { Component } from '@angular/core';
import {FormControl,FormGroup,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  angularForm = new FormGroup({
    name : new FormControl()
  })

constructor(private fb : FormBuilder){
  this.createForm();
}
createForm() {
  this.angularForm = this.fb.group({
     email: ['',Validators.required],
     password : ['',Validators.required],
  });
}
}