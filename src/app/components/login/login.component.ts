import { Component } from '@angular/core';

@Component({
  selector: 'login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  showingRegisterForm: boolean = false;

  login() {

  }

  registro(){
     
  }

  toggleForm() {
    this.showingRegisterForm = !this.showingRegisterForm;
  }
}
