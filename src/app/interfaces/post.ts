import { User } from "./user";

export interface Post {

    id: string,
    img: string,
    comentarios: Array<string>,  
    likes: Array<User>,
    fecha: Date,
    autor: User

}
