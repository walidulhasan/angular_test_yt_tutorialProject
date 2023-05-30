import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {

  title:string='List of Post';
  postParentMessage:string='Message comming from the post component';
  fromChildComponent:string='This message comming from child component';
  outputChildComponent:string='Message from child component vai output';
  @Input() fromParent:string | undefined;
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage=()=>{
    this.messageEvent.emit(this.outputChildComponent)
  }
  constructor() {}
  ngOnInit(): void {

  }
}
