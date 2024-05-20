import { User } from "./user";

export interface Post {

    id?: String,
    img?: String,
    comentarios?: Array<string>,
    likes?: Array<User>,
    fecha?: Date,
    autor?: User

}
