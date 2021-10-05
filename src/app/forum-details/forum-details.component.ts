import { Component, OnInit } from '@angular/core';
import {Forum} from "../Modele/forum";
import {Details} from "../Modele/details";
import { ActivatedRoute } from '@angular/router';
import {ForumService} from "../services/forum.service";

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.css']
})
export class ForumDetailsComponent implements OnInit {
  hideinter : boolean = false
  message : string;
  message2: string;

  details : Details = new Details();
  hideinter2 : boolean = true
  hidee : boolean =false
  hidee2 : boolean= true
  id: number
  forum: Forum
  forumsdetail : Details []
  constructor(private route: ActivatedRoute, private forumService: ForumService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.forum = new Forum();
    this.forumService.getForumById(this.id).subscribe( data => {
      this.forum = data;
    });
  }
  getformdet(id : number){
    this.forumService.getforumdetlist(this.id).subscribe(data => {
      this.forumsdetail = data;
    });
  }

  addlike(id: number) {
    this.forumService.ajouterlike(this.forum.id).subscribe( data => {
      console.log(data);
    })
  }
  dislike(id: number) {
    this.forumService.dislike(this.forum.id).subscribe( data => {
      console.log(data);
    })
  }

  hideinterpol(){
    this.hideinter=true;
    this.hideinter2=false;
  }
 hider(){
   this.hideinter=false;
   this.hideinter2=true;

 }
  hideee() {
    this.hidee=true;
    this.hidee2=false;
  }

  ss(){
    this.hidee=false;
    this.hidee2=true;
  }
  saveDetail(){
    this.forumService.creedett(this.details).subscribe( data =>{
        console.log(data);
        this.message=null;
        this.message2="vous avez creer un commmentaire avec succes !";
        this.forum.commentsnb +=1;


      },
      error => console.log(error));
    this.message="vous avez utiliser des mots interdits";
    this.message2=null;

  }

  onSubmit(){
    console.log(this.details);
    this.details.forumId=this.forum.id;
    //this.forum.commentsnb =+1;
    this.saveDetail();


  }




}
