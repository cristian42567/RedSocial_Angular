import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RegistroComponent } from "../registro/registro.component";

@Component({
    selector: 'topbar',
    standalone: true,
    templateUrl: './top-bar.component.html',
    styleUrl: './top-bar.component.css',
    imports: [LoginComponent, RegistroComponent]
})
export class TopBarComponent {
  textoDeBoton = "Iniciar sesión"

  formularioAbierto: boolean = false;

  cambiarFormulario(){
    this.formularioAbierto = !this.formularioAbierto;
  }

  textoDeBotonDos = "únete a I N D I R E"

  formularioAbiertoDos: boolean = false;

  cambiarFormularioDos(){
    this.formularioAbiertoDos =! this.formularioAbiertoDos;
  }

}
