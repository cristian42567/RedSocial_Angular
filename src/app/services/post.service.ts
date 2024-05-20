import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  inicio(): void {
    const postsArray = localStorage.getItem("posts")

    if (postsArray != null) {
      const arrayPosts: Array<Post> = JSON.parse(postsArray).posts

      this.posts = arrayPosts

      console.log(this.posts)
    }
  }

  posts: Array<Post> = []

  crearPost(post: Post) {
    post.id = this.posts.length.toString()

    this.posts.push(post)

    this.guardarPost()
  }

  obtenerPostPorID(id: String): Post {

    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id == id) {
        return this.posts[i]
      }
    }

    return {}
  }

  darLike(id: String, user: User) {
    for (let i = 0; i < this.posts.length; i++) {

      if (this.posts[i].id == id) {
        this.posts[i].likes?.push(user)
      }
    }  
    this.guardarPost()
  }

  quitarLike(id: String, user: User) {
    for (let i = 0; i < this.posts.length; i++) {

      if (this.posts[i].id == id) {

        const indiceDelAutor = this.posts[i].likes?.indexOf(user)

        this.posts[i].likes?.splice(indiceDelAutor!, 1)
      }
    }

    this.guardarPost()
  }

  private guardarPost() {
    const postAsubir = {
      posts: this.posts
    }

    localStorage.setItem("posts", JSON.stringify(postAsubir))
  }
}


