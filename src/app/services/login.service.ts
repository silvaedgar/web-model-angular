import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private httpClient : HttpClient) { }

  URL:string= "connection"

  // conexion al back-end y se obtiene el Token
  public generateToken(loginData : any) {

    if ((loginData.usernameOrEmail == 'admin@web-model' && loginData.password == 'admin') || (loginData.usernameOrEmail == 'user@web-model' && loginData.password == 'User'))
      return "TokenCreated"
    return ''
  }

  // conexion a back-end para determinar el usuario segun el token activo
  public getCurrentUser(){
    return '';
  }

  //iniciamos sesión y establecemos el token en el localStorage
  public setToken(token:any){
    localStorage.setItem('token',token);
    return true;
  }

// configuramos el usuario en el localstorage
  public setUser(user:any){
    localStorage.setItem('user', user);
  }

// se verifica si el usuario actual del localstorage esta logueado
  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
      return false;
    }
    return true;
  }

  //cerramos sesion y eliminamos el token del localStorage
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //obtenemos el token
  public getToken(){
    return localStorage.getItem('token');
  }


  // obtenemos los datos del usuario en el localstorage
  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return userStr;
    }else{
      this.logout();
      return null;
    }
  }

}
