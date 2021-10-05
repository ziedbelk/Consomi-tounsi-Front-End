import {ForumService} from "../services/forum.service";
import { Router } from '@angular/router';
import { HttpClient, HttpEventType } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import {Forum} from "../Modele/forum";

@Component({
  selector: 'app-create-forum',
  templateUrl: './create-forum.component.html',
  styleUrls: ['./create-forum.component.css']
})
export class CreateForumComponent implements OnInit {
  message: string;
  forum: Forum = new Forum();

  constructor(private forumservice: ForumService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveForum() {
    this.forumservice.createForum(this.forum).subscribe(data => {
        console.log(data);
        this.goToForumList();
      },
      error => console.log(error));
  }



  goToForumList(){
    this.router.navigate(['/forum-list']);
  }

  onSubmit(){
    console.log(this.forum);
    this.saveForum();
  }
}

