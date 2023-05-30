import { Component } from '@angular/core';

@Component({
  selector: 'app-angulardirectives',
  templateUrl: './angulardirectives.component.html',
  styleUrls: ['./angulardirectives.component.css']
})
export class AngulardirectivesComponent {




  stepForm?:string;
  isActive:Boolean=true;

  postArray: Array<string>=['post 1','post 2','post 3','post 4','post 5'];
  objArray: Array<{id:number,pageTitle:string}> = [

  ];
  constructor(){
    for (let index = 0; index < this.postArray.length; index++) {
      console.log(this.postArray[index])
    }
  }

  addElement=()=>{
    let number:number=this.objArray.length+1;
    this.objArray.push({id:number,pageTitle:`post ${number}`})
  }

  removeElement=(item:any)=>{
    // let index=this.objArray.indexOf(item);
    this.objArray.splice(item,1)
  }

  onClick=(status:string)=>{
    this.stepForm=status
  }

  
}
