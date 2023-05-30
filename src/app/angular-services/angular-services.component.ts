import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-angular-services',
  templateUrl: './angular-services.component.html',
  styleUrls: ['./angular-services.component.css'],
  providers:[PostService]
})
export class AngularServicesComponent implements OnInit {

  posts:Array<{id:number,postTitle:string}>=[];

  constructor(private postService:PostService){
  //  let postService= new PostService();
      this.posts=postService.postList;
  }

  ngOnInit(): void {
    console.log(this.posts);
  }

}
