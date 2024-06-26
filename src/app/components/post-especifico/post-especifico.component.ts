import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../interfaces/post';
import { UserService } from '../../services/user.service';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-post-especifico',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './post-especifico.component.html',
  styleUrl: './post-especifico.component.css'
})

export class PostEspecificoComponent implements OnInit {

  id: string = ""
  post: Post = {}

  comentario = ""

  constructor(
    private route: ActivatedRoute,
    private service: PostService,
    private userService: UserService,
    private router: Router,
  ) {

  }
  ngOnInit(): void {
    this.service.inicio()

    if (!this.userService.estaLogueado) {
      this.router.navigate([""])
    }


    this.id = this.route.snapshot.paramMap.get("id")!

    this.post = this.service.obtenerPostPorID(this.id)
  }

  darLike() {
    this.service.darLike(this.id, this.userService.userData)
  }

  tieneLike(): boolean {
    
    for (let i = 0; i < this.post.likes!.length; i++) {
      if(this.post.likes![i].email == this.userService.userData.email){
        return true
      }
    }
    return false
  }

  quitarLike() {
    this.service.quitarLike(this.id, this.userService.userData)
  }

  anadirComentario(){
    let username = ""

    if(this.userService.userData.username != ""){
      username = this.userService.userData.username
    }else{
      username = "Anónimo"
    }

    this.comentario = `${username}: ${this.comentario}`

    this.service.anadirComentario(this.id, this.comentario)

    this.comentario = ""
  }
}
