import { Component } from '@angular/core';

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css']
})
export class UserDetailsFormComponent {
  name?:string;
  email?:string;
  address?:string;
  dataList:Array<{name:string | undefined ,email:string | undefined,address:string | undefined}>=[];

  saveData=()=>{
    this.dataList.push({
      name: this.name,
      email: this.email,
      address: this.address
    })
    this.clearData();
  }
  deleteRow=(i:number)=>{
    this.dataList.splice(i,1)
  }
  clearData=()=>{
    this.name='';
    this.email='';
    this.address='';
  }
}
