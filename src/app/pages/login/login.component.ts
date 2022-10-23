import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

// Uso de Form Builder para un FORM reactivo. Sgte Version
  public loginData = {
    username : '',
    email : 'admin@web-model',
    password : 'admin',
    usernameOrEmail : ''
  }
  constructor(private _snack : SnackbarService, private _loginService: LoginService ) { }

  formSubmit() {
    if (this.loginData.email.trim() =='' || this.loginData.password.trim() == '') {
      if (this.loginData.email.trim() == '') {
        this._snack.showSnackBar('El usuario es Requerido ','Aceptar',4000,'center','top')
      }
      if (this.loginData.password.trim() == '') {
        this._snack.showSnackBar('Ingrese el Password','Aceptar',4000,'center','top')
      }
      return
    }
    this.loginData.usernameOrEmail = this.loginData.email;
    let data = this._loginService.generateToken(this.loginData)
    console.log("DATA: ",data)
    if (data == "TokenCreated") {
      this._loginService.setUser(this.loginData.usernameOrEmail);
      this._loginService.setToken(data);
      this._snack.showSnackBar('Bienvenido al Sistema ' + this.loginData.usernameOrEmail,'Aceptar',4000,'center','top')
      window.location.href = "main"
      window.location.href = "navbar-auth"

    }
    else
       this._snack.showSnackBar('Datos no aceptados','Aceptar',4000,'center','top')
  }

  ngOnInit(): void {
  }

}
