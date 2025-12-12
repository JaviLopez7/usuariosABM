import { Injectable } from '@angular/core';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private _usuarios: Array<Usuario>;

  constructor() {
  // Al inicializar el servicio, carga los usuarios desde localStorage.
  // Si no hay nada guardado, inicializa con un arreglo vacío.
    this._usuarios = JSON.parse(localStorage.getItem("usuarios") ?? '[]');
  }

  // Getter que muestra el array actual de usuarios
  public get Usuario(): Array<Usuario> {
    return this._usuarios;
  }

  // Método para recargar los usuarios desde localStorage (por si fueron modificados externamente)
  public getUsuarios(): void {
    this._usuarios = JSON.parse(localStorage.getItem("usuarios") ?? '[]')
  }

  // Método para guardar una nueva lista de usuarios en localStorage
  public saveUsuario(usuarios: Array<Usuario>) {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    this.getUsuarios();
  }

  
}
