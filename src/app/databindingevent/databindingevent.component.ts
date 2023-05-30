import { Component } from '@angular/core';

@Component({
  selector: 'app-databindingevent',
  templateUrl: './databindingevent.component.html',
  styleUrls: ['./databindingevent.component.css']
})
export class DatabindingeventComponent {
  postTitle?:string;
  postDetails?:string;
  imageUrl?:string;
  postUrl?:string;
  addBackground:boolean=false;
}
