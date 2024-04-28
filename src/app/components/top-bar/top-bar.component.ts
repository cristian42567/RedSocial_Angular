import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'topbar',
    standalone: true,
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.css',
    imports: [LoginComponent, RouterLink]
})
export class TopBarComponent {

  constructor(
    private service: UserService
  ){}

  textoDeBoton = "Iniciar sesión"

  formularioAbierto: boolean = false;

  cambiarFormulario(seHaLogueado: boolean = false){
    this.textoDeBoton = "Iniciar sesión"
    
    this.formularioAbierto = !this.formularioAbierto;

    if(seHaLogueado){
      this.textoDeBoton = "Cerrar sesión " + this.service.userData.username
    }

    this.service.login
  }

  textoDeBotonDos = "únete a I N D I R E"

}
