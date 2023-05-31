import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-angular-services',
  templateUrl: './angular-services.component.html',
  styleUrls: ['./angular-services.component.css'],
})
export class AngularServicesComponent implements OnInit {

  posts:Array<Post>=[];

  constructor(private postService:PostService){
  //  let postService= new PostService();
      this.posts=postService.postList;
  }

  ngOnInit(): void {
    console.log(this.posts);
  }

}
