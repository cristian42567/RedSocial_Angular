import { Component, EventEmitter, Output } from '@angular/core';
import { DatosLogin } from '../../interfaces/datos-login';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistroData } from '../../interfaces/registro-data';

@Component({
  selector: 'login',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showingRegisterForm: boolean = false;

  @Output() usuarioLogueado: EventEmitter<void> = new EventEmitter<void>();


  usuario: DatosLogin = {
    usuario: "",
    contrasena: ""
  }

  registerData:RegistroData = {
    username: "",
    password: "",
    confirmPassword:""
  }

  login() {
    if(this.usuario.usuario == "cristian" && this.usuario.contrasena == "cristian"){
       this.usuarioLogueado.emit();
    }

    this.usuario.usuario = ""
    this.usuario.contrasena = ""

  }

  registro() {
    if(this.registerData.username == "" || this.registerData.password == "" || this.registerData.confirmPassword == ""){
      alert("Los campos no pueden estar vacios")
    }else if(this.registerData.password != this.registerData.confirmPassword){
      alert("Las contraseñas no coinciden")
    }else{
      this.usuario.usuario =  this.registerData.username
      this.usuario.contrasena =  this.registerData.password

      this.login()
    }

    this.registerData.username = ""
    this.registerData.password = ""
    this.registerData.confirmPassword = ""
  }

  toggleForm() {
    this.showingRegisterForm = !this.showingRegisterForm;
  }
}
