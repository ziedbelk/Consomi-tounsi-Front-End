import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardCustomerComponent } from './board-customer/board-customer.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {CreateForumComponent} from "./create-forum/create-forum.component";
import {ForumuserComponent} from "./forumuser/forumuser.component";
import {ForumDetailsComponent} from "./forum-details/forum-details.component";
import {ForumListComponent} from "./forum-list/forum-list.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardCustomerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'create-forum', component: CreateForumComponent },
  { path: 'forumuser', component: ForumuserComponent },
  {path: 'forum-details/:id', component: ForumDetailsComponent},
  {path:'forum-list',component: ForumListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
