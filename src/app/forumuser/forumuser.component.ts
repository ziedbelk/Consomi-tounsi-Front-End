import { Component, OnInit } from '@angular/core';
import {Forum} from "../Modele/forum";
import {ForumService} from "../services/forum.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-forumuser',
  templateUrl: './forumuser.component.html',
  styleUrls: ['./forumuser.component.css']
})
export class ForumuserComponent implements OnInit {
  forums: Forum[];
  constructor(private forumservice: ForumService,
              private router: Router) { }

  ngOnInit(): void {
    this.getForums();
  }
  private getForums(){
    this.forumservice.getForumList().subscribe(data => {
      this.forums = data;
    });
  }
  forumDetails(id: number){
    this.router.navigate(['forum-details', id]);
  }


}
