import { Component } from '@angular/core';
import { DatosLogin } from '../../interfaces/datos-login';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

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

  usuario: DatosLogin = {
    usuario: "",
    contrasena: ""
  }

  login() {
    

  }

  registro() {

  }

  toggleForm() {
    this.showingRegisterForm = !this.showingRegisterForm;
  }
}
