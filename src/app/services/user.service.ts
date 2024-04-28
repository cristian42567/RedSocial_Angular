import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  //Información del usuario logueado
  userData: User = {

    username: "",
    nombre:"",
    apellido:"",
    email: "",
    password:""

  }

  usuarios: Array<User> = [

    {
      username: "admin",
      nombre:"admin",
      apellido:"admin",
      email: "admin",
      password:"admin"

    },
    {
      username: "admin2",
      nombre:"admin2",
      apellido:"admin2",
      email: "admin2",
      password:"admin2"

    },
    {
      username: "admin3",
      nombre:"admin3",
      apellido:"admin3",
      email: "admin3",
      password:"admin3"

    },
  ]

  login(nombreDeUsuario: string, contraseña: string): Boolean{

    for (let i = 0; i < this.usuarios.length; i++) {
      if(nombreDeUsuario == this.usuarios[i].email || nombreDeUsuario == this.usuarios[i].username){

        if(contraseña == this.usuarios[i].password){
          this.userData = this.usuarios[i]

          return true

        } 
      }      
    }

      this.userData = {
        username: "",
        nombre:"",
        apellido:"",
        email: "",
        password:""
      }
      return false
  }
}
