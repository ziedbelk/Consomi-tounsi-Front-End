import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Forum} from "../Modele/forum";
import { Observable } from 'rxjs';
import {Details} from "../Modele/details";
import {Mots} from "../Modele/mots";

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  private baseURL = "http://localhost:8080/api/v1/employees";
  private likeURL = "http://localhost:8080/api/v1/ajouterlike";
  private plusURL ="http://localhost:8080/api/v1/pluslike";
  private creerURL="http://localhost:8080/api/v1/posterforum";
  private deleteforumURL="http://localhost:8080/api/v1/deleteallforum";
  private creerdetURL="http://localhost:8080/api/v1/posterdet";
  private getdetURL="http://localhost:8080/api/v1/forumdettf";
  private deleteforumdetURL="http://localhost:8080/api/v1/deleteforumidd";
  private motURL="http://localhost:8080/api/v1/ajoutermots";
  private dislikeURL="http://localhost:8080/api/v1/ffffffff";
  private motgetURL="http://localhost:8080/api/v1/affichermots";

  constructor(private httpClient: HttpClient) { }

  getForumList(): Observable<Forum[]>{
    return this.httpClient.get<Forum[]>(`${this.baseURL}`);
  }
  getforumdetlist(id : number): Observable<Details[]>{
    return this.httpClient.get<Details[]>(`${this.getdetURL}/${id}`);
  }
  getpluslisted(): Observable<Forum []> {
    return this.httpClient.get<Forum[]>(`${this.plusURL}`);
  }
  affichermots(): Observable<Mots []> {
    return this.httpClient.get<Mots[]>(`${this.motgetURL}`);
  }


  createForum(forum: Forum): Observable<Object>{
    return this.httpClient.post(`${this.creerURL}`, forum);
  }
  savedict(mots: Mots): Observable<Object>{
    return this.httpClient.post(`${this.motURL}`, mots);
  }
  creedett(details : Details) : Observable<Object>{
    return this.httpClient.post(`${this.creerdetURL}`, details);
  }

  getForumById(id: number): Observable<Forum>{
    return this.httpClient.get<Forum>(`${this.baseURL}/${id}`);
  }

  updateForum(id: number, employee: Forum): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, employee);
  }

  deleteForum(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteforumURL}/${id}`);
  }
  deleteformdet(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.deleteforumdetURL}/${id}`);
  }
  ajouterlike(id: number): Observable<Object>{
    return this.httpClient.put(`${this.likeURL}/${id}`,null);
  }
  dislike(id: number): Observable<Object>{
    return this.httpClient.put(`${this.dislikeURL}/${id}`,null);
  }

}


