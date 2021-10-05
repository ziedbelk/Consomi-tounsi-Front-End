import { Component, OnInit } from '@angular/core';
import {Forum} from "../Modele/forum";
import {ForumService} from "../services/forum.service";
import { Router } from '@angular/router';
import {Mots} from "../Modele/mots";

@Component({
  selector: 'app-forum-list',
  templateUrl: './forum-list.component.html',
  styleUrls: ['./forum-list.component.css']
})
export class ForumListComponent implements OnInit {
  forums: Forum[];
  forumsplus : Forum[] ;
  mots: Mots = new Mots();
  hideinter: boolean= false;
  hideinter2: boolean= true;
  moot: Mots[];

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

  updateForum(id: number){
    this.router.navigate(['update-forum', id]);
  }

  deleteEmployee(id: number){
    this.forumservice.deleteForum(id).subscribe( data => {
      console.log(data);
      this.getForums();
    })
  }
  deleteforumdet(id: number){
    this.forumservice.deleteformdet(id).subscribe( data => {
      console.log(data);

    })
  }
  afficherplus(){
    this.forumservice.getpluslisted().subscribe(data => {
      this.forumsplus = data;
    });
  }
  afficherdict(){
    this.forumservice.affichermots().subscribe(data => {
      this.moot = data;
    });
  }

  onSubmit(){
    this.mots.id=66;
    console.log(this.mots);
    this.saveMots();
  }
  saveMots(){
    this.forumservice.savedict(this.mots).subscribe( data =>{
        console.log(data);
       },
      error => console.log(error));
  }
  hide(){
    this.hideinter=true;
    this.hideinter2=false;
  }
  hide2(){
    this.hideinter=false;
    this.hideinter2=true;
  }
}
