import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = 'Message from typescript component file';
  imgUrl:string='https://picsum.photos/200/300';
  fromMessage!:string;
  textValue:string="Value is Comming from the component";
  bool:Boolean=true;

  buttonClick=()=>{
    console.log('click me');
  }

  onKeyUp=($event:any)=>{
    alert($event.target.value)

  }

  onKeyUps=(username:string)=>{
    alert(username)

  }

  onKeyUpss=()=>{
    alert(this.fromMessage)
  }

  onKeyUpsss=()=>{
    alert(this.textValue)
  }

}
