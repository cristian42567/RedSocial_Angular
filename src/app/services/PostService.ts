import { Injectable, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';


@Injectable({
    providedIn: 'root'
})
export class PostService implements OnInit {
    hola() {
      throw new Error('Method not implemented.');
    }
    inicio: any;

    constructor() { }

    posts: Array<Post> = [];

    ngOnInit(): void {
    }

}
