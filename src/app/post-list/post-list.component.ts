import { Component,OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts=[
    {
      id:1,
      title:'Title 1',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nulla?'
    },
    {
      id:2,
      title:'Title 2',
      content:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem doloribus quisquam blanditiis, eos modi ad amet? Nihil sint exercitationem aperiam.'
    },
    {
      id:3,
      title:'Title 3',
      content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae corrupti consectetur qui incidunt, est nesciunt ut ullam, aliquam, molestias repellendus laborum odio rem animi! Culpa velit laboriosam, vitae blanditiis vero reiciendis unde voluptates impedit, molestias, incidunt odio ab iusto voluptas. In, cum. Harum, voluptatem exercitationem. Saepe qui modi fugiat placeat.'
    }
  ]
  listData:Array<Post>=[];
  constructor(private postService:PostService){
    this.listData=postService.postList;
  }
  ngOnInit(): void {
    console.log('hello');
  }

  addDataToList=()=>{
    let data:Post={
      id:10,
      postTitle:'post 10'
    }
    this.postService.addListItem(data);
  }

}
