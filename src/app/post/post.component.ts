import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})


export class PostComponent implements OnInit {
 post : any;
  constructor(private service: PostService)  {
  }



  ngOnInit(): void {
    this.service.getPosts()
    .subscribe(Response =>{
      this.post = Response;
    }, error => {
      alert('An uexpected error occurred.');
      console.log(error);
    }); 
  }

  createPost(input: HTMLInputElement){
    let post:any = {title: input.value};
    input.value = '';

    this.service.createPosts(post)
    .subscribe(response => {
      post['id'] = response;
      this.post.splice(0, 0, post);
    },
    (error: Response) =>{
      if(error.status === 400)
      alert('llll');
      else{
        alert('An unexpected error occurred.');
        console.log(error);
      }
  
    })
  } 

  updatePost(post:any){
    this.service.updatePost(post)
      .subscribe(response => {
        console.log(response);
      },
      error =>{
        alert('An unexpected error occurred.');
        console.log(error);
      })
  }

  deletePost(post:any){
  this.service.deletePost(post.id)
    .subscribe(
      response => {
      let index = this.post.indexOf(post);
      this.post.splice(index,1);
      console.log(response);
      console.log("checks out")
    },
    (error: Response) => {
      if(error.status === 404)
      alert('This post has already been deleted')
      else{
        alert('An unexpected error occurred');
        console.log(error)
      }
    });
  }

}
