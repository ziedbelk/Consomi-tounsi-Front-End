import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { AddUpdateProductComponent } from './product/add-update-product/add-update-product.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { SidbarComponent } from './home/sidbar/sidbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardCustomerComponent } from './board-customer/board-customer.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { CreateForumComponent } from './create-forum/create-forum.component';
import { ForumuserComponent } from './forumuser/forumuser.component';
import { ForumDetailsComponent } from './forum-details/forum-details.component';
import { ForumListComponent } from './forum-list/forum-list.component';
import { InterditComponent } from './interdit/interdit.component';
import { UpdateForumComponent } from './update-forum/update-forum.component' ;

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    AddUpdateProductComponent,
    HomeComponent,
    NavbarComponent,
    SidbarComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardUserComponent,
    BoardCustomerComponent,

    CreateForumComponent,

    ForumuserComponent,

    ForumDetailsComponent,

    ForumListComponent,

    InterditComponent,

    UpdateForumComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    FormsModule,
    HttpClientModule,

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }




















