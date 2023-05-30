import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent {
  pipes:string|undefined;
  upperCasePipe:string='value | uppercase';
  lowerCasePipe:string='LowerCase pipe | lowercase'
  numberPipe:number=232425452;
  decimalPipe:number=24.33535;
  nowDate:Date=new Date();
  damiText:string='Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet provident veritatis at ullam illum eligendi illo nostrum? Amet temporibus deserunt, cumque asperiores voluptas ratione, inventore dolorum, nulla corporis quae possimus!'
  objPipes={
    id:1,
    name:'Karim',
    age:23,
    city:'Dhaka'
  }
  slicPipe:Array<string>=['post 1','post 2','post 3','post 3']
  pipesShow=(pipes:string)=>{
    this.pipes=pipes;
  }
}
