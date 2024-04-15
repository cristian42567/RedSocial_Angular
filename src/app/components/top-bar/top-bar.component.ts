import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'topbar',
    standalone: true,
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.css',
    imports: [LoginComponent, RouterLink]
})
export class TopBarComponent {
  textoDeBoton = "Iniciar sesión"

  formularioAbierto: boolean = false;

  cambiarFormulario(seHaLogueado: boolean = false){
    this.textoDeBoton = "Iniciar sesión"
    
    this.formularioAbierto = !this.formularioAbierto;

    if(seHaLogueado){
      this.textoDeBoton = "Cerrar sesión"
    }
  }

  textoDeBotonDos = "únete a I N D I R E"

}
