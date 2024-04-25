import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DatosLogin } from '../../interfaces/datos-login';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { RegistroData } from '../../interfaces/registro-data';
import { Router } from '@angular/router';

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
export class LoginComponent implements OnInit{
  showingRegisterForm: boolean = false;

  @Output() usuarioLogueado: EventEmitter<void> = new EventEmitter<void>();
  @Output() cerrarFormulario: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ){}
    

  ngOnInit(): void {
    this.formularioLogin = this.formBuilder.group({
      usuario: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]],
      contraseña: ["", [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(14)
      ]]
    })

    this.formularioRegistro = this.formBuilder.group({
      usuario: ["", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]],
      contraseña: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(14)
      ]],
      confirmarContraseña: ["", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(14)
      ]]
    })
  }

  formularioLogin: FormGroup = new FormGroup({
    usuario: new FormControl(""),
    contraseña: new FormControl("")
  })

  formularioRegistro: FormGroup = new FormGroup({
    usuario: new FormControl(""),
    contraseña: new FormControl(""),
    confirmarContraseña: new FormControl("")
  })


  login() {
    const nombreDeUsuario = this.formularioLogin.get("usuario")?.value
    const contraseña = this.formularioLogin.get("contraseña")?.value

    if(nombreDeUsuario == "admin" && contraseña == "admin"){
       this.usuarioLogueado.emit();

       this.router.navigate(["/posts"])
    }

    this.formularioLogin.get("usuario")?.setValue("")
    this.formularioLogin.get("contraseña")?.setValue("")

  }

  registro() {
    const nombreDeUsuario = this.formularioRegistro.get("usuario")?.value
    const contraseña = this.formularioRegistro.get("contraseña")?.value
    const confirmarContraseña = this.formularioRegistro.get("confirmarContraseña")?.value

    if(contraseña != confirmarContraseña){
      alert("Las contraseñas no coinciden")
    }else{
      this.formularioLogin.get("usuario")?.setValue(nombreDeUsuario)
      this.formularioLogin.get("contraseña")?.setValue(contraseña)

      this.login()

      console.log("Se ha registrado el usuario correctamente")
    }

    this.formularioRegistro.get("usuario")?.setValue("")
    this.formularioRegistro.get("contraseña")?.setValue("")
    this.formularioRegistro.get("confirmarContraseña")?.setValue("")
  }

  toggleForm() {
    this.showingRegisterForm = !this.showingRegisterForm;
  }

  cerrarForm(){
    this.cerrarFormulario.emit();
  }


}
