import { Component, OnInit } from '@angular/core';
import {Forum} from "../Modele/forum";
import {ForumService} from "../services/forum.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update-forum',
  templateUrl: './update-forum.component.html',
  styleUrls: ['./update-forum.component.css']
})
export class UpdateForumComponent implements OnInit {
  forum: Forum = new Forum();

  constructor(private forumservice: ForumService,
              private router: Router) {
  }

  ngOnInit(): void {
  }


}


