import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../clases/usuario';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-alta',
  imports: [RouterLink, FormsModule ,CommonModule ,MatFormFieldModule, MatIconModule, MatButtonModule, MatInputModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {

  // Objeto de usuario que se vincula al formulario
  public miUsuario!: Usuario;
  // Bandera para saber si estamos en modo edición (true) o modo alta (false)
  public modoEdicion: boolean = false;

  constructor(
    public route: Router,
    public activeRoute: ActivatedRoute,
    public usuarioService: UsuarioService,
    private snackBar: MatSnackBar
  ) {
    // Inicializa el usuario
    this.miUsuario = new Usuario();


    this.activeRoute.paramMap.subscribe((param) => {
      let idParametro = param.get('id') ?? '';
      if (idParametro === '') {
        // Crear un nuevo usuario si no hay parámetro
        this.miUsuario = new Usuario();
        this.modoEdicion = false; // Modo alta
      } else {
        // Obtener el arreglo de usuarios desde el servicio
        let usuarios: Array<Usuario> = this.usuarioService.Usuario;

        // Usar filter para encontrar al usuario
        this.miUsuario = usuarios.filter(
          unUsuario => unUsuario._id.toString() === idParametro
        )[0] ?? new Usuario();

        this.modoEdicion = true;
      }
    });
  }

  // Método para agregar o modificar un usuario
  public agregarUsuario() {
    let usuarios: Array<Usuario> = this.usuarioService.Usuario;

    // Buscar si el usuario ya existe (por ID)
    let index = usuarios.findIndex(u => u._id === this.miUsuario._id);

    if (index !== -1) {
      // Modo edición: reemplazar el usuario en la misma posición
      usuarios[index] = this.miUsuario;

      this.snackBar.open('Usuario modificado exitosamente', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    } else {
      //  Modo alta: verificar que no se repita el correo
      let existeCorreo = usuarios.some(u => u._correoElectronico === this.miUsuario._correoElectronico);
      if (existeCorreo) {
        this.snackBar.open('Ya existe un usuario con ese correo electrónico', 'Cerrar', {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: ['snack-error']
        });
        // No se agrega el usuario si el correo ya existe
        return;
      }

      // Si es válido, asignar un nuevo ID y agregar al array
      this.miUsuario._id = usuarios.length + 1;
      usuarios.push(this.miUsuario);
      // Redirigir al inicio
      this.route.navigateByUrl("/" );

      this.snackBar.open('Usuario agregado exitosamente', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }

    // Guardar la lista actualizada en el servicio
    this.usuarioService.saveUsuario(usuarios);
    // Redirigir al inicio
    this.route.navigateByUrl("/" );

    // Limpiar el formulario
    this.miUsuario = new Usuario();
    this.modoEdicion = false;
  }
}
