 import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'angular-crash';
  post = {
    title: "Title",
    isFavorite: false
  }

  change = {
    addfirst: true,
    addsecond: true
  }


  onFavoriteChanged(eventArgs:FavoriteChangedEventArgs){
    console.log("Favorite Changed", eventArgs);
  }

  setClasses(){
    return{
      'active': this.change.addfirst,
      'nav-link': this.change.addsecond
    }
  }
  /*
  courses = [1,2 ];
  */

  course = [
    {id:1, name: 'course1'},
    {id:2, name: 'course2'},
    {id:3, name: 'course3'},
  ];

  onAdd(){
    this.course.push({id:4, name: 'course4'})
  }

  onRemove(coursee : any){
    let index = this.course.indexOf(coursee);
    this.course.splice(index,1);
  }

  onChange(course:any){
    course.name = "UPDATED";
  }

  courses:any;

  loadCourses(){
    this.courses = [
      {id:1, name: 'course1'},
      {id:2, name: 'course2'},
      {id:3, name: 'course3'},
    ];
  }

  trackCourse(index:any , course: any ){
    return course ? course.id:undefined;
  }

  
  canSave = true;

  task = {
    title: 'Review applications',
    assignee: {
      name: 'John Smith'
    }

  
  }

  
}
