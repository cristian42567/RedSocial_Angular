import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/PostService';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Post } from '../../interfaces/post';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit{

  constructor(
    private service: PostService
  ) { }

  posts: Array<Post> = []

  mostrarFormulario = false

  ngOnInit(): void {
    this.service.inicio()

    this.posts = this.service.posts
  }

  mostrar(){
    this.mostrarFormulario = true
  }

  ocultar(){
    this.mostrarFormulario = false
  }

  subirPost(){
    
  }

}
