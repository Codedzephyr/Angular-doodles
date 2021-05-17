import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CourseComponent} from './course.component'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component'
import { CourseService } from './course.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SummaryPipe} from './summary.pipe';
import {HttpClientModule} from '@angular/common/http';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { PassworddComponent } from './passwordd/passwordd.component';
import { PostComponent } from './post/post.component';
import { PostService } from './services/post.service';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    InputFormatDirective,
    ContactFormComponent,
    SignUpComponent,
    NewCourseFormComponent,
    PassworddComponent,
    PostComponent,
    GithubFollowersComponent,
    NavbarComponent,
    NotfoundComponent,
    HomeComponent

  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '', 
      component: HomeComponent
    },
      {
        path: 'github-followers', 
      component:GithubFollowersComponent
    },
      {
        path:'sign-up',
        component:SignUpComponent
      },
      {
        path: 'panel',
        component: PanelComponent
      },
      {
        path: 'contact-form',
        component: ContactFormComponent
      },
      {
        path: '**',
        component: NotfoundComponent
      }, 
    ]),

    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CourseService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
