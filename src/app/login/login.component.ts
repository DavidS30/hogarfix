import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { passwordsMustBeEqual } from '../form-extensions/validators/password-must-be-equals.validator';
import { AccountsService } from '../accounts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide = true;
  hide_confirmation = true;
  page = 'login';

  control_names: any = {
    email: 'Correo electrónico',
    password: 'Contraseña',
    confirm_password: 'Confirmar contraseña',
    username: 'Nombre de usuario',
    name: 'Nombre',
    last_name: 'Apellido'
  }

  changePage():void {
    this.page = this.page === 'login' ? 'register' : 'login';
  }


  // REGISTER FORM 

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    confirm_password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    last_name: new FormControl('', [Validators.required]),
  },
  passwordsMustBeEqual);

  getErrorMessageRegister() {
    let msj_error: string = '';
    for (const key in this.registerForm.controls) {
      if (this.registerForm.get(key)?.hasError('required')) {
        msj_error = 'Debes ingresar un valor de ' + this.control_names[key] + ' válido.';
        break;
      }
    }

    if (this.registerForm.get('email')?.hasError('email'))
      msj_error = 'El email ingresado no es válido';

    if (this.registerForm.hasError('passwordsMustBeEqual'))
      msj_error = 'Las contraseñas deben ser iguales';

    return msj_error
  }

  onSubmitRegister() {
    // desestructuring the this.registerForm.value object
    const { email, username, password, confirm_password, name, last_name } = this.registerForm.value;
    try{
      this.accountService.postAPI({
        "username": username,
        "email": email,
        "password1": password,
        "password2": confirm_password
      }, 'registration').subscribe(data => {
        console.log(data);
      });
      alert("Se ha registrado exitosamente!");
      this.page = 'login';
    }
      catch(error){
        alert("Ocurrió un error al registrarse.")
      }
  }
  

  // Login FORM

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  getErrorMessageLogin() {
    let msj_error: string = '';
    for (const key in this.loginForm.controls) {
      if (this.loginForm.get(key)?.hasError('required')) {
        msj_error = 'Debes ingresar un valor de ' + this.control_names[key] + ' válido.';
        break;
      }
    }

    return msj_error
  }

  onSubmitLogin() {
    try {
      const { username, password } = this.loginForm.value;
      this.accountService.postAPI({
        "username": username,
        "password": password
      }, 'login').subscribe(data => {
        localStorage.setItem('token', data['key']);
        this.accountService.setLogin(true);
        this.router.navigate(['/home']);
      }, 
      error => {  
        alert("El usuario o la contraseña son incorrectos." + error);
        });
    } catch (error) {
      alert("Ha ocurrido un error al registrarse: "+error)
    }
  }

  constructor(private accountService: AccountsService, private router: Router){}

}
