import { Component } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-angularform',
  templateUrl: './angularform.component.html',
  styleUrls: ['./angularform.component.css']
})
export class AngularformComponent {


  onSubmit=(f:NgForm)=>{
    console.log(f)
  }

  getValue=(f:NgControl)=>{
    console.log(f);
  }
}
