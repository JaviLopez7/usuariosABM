import { Component } from '@angular/core';
import { UsuarioDetalleComponent } from '../usuario-detalle/usuario-detalle.component';
import { MatIconModule } from '@angular/material/icon';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../clases/usuario';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-baja',
  imports: [CommonModule, UsuarioDetalleComponent, MatIconModule],
  templateUrl: './baja.component.html',
  styleUrl: './baja.component.css'
})
export class BajaComponent {

  public usuarios: Array<Usuario>;

  constructor(public usuarioService: UsuarioService,
    public snackBar: MatSnackBar) {
    // Carga inicial de los usuarios desde el servicio
    this.usuarios = this.usuarioService.Usuario;
  }
  // Método para eliminar un usuario por ID
  public eliminar(id: number) {
    // Confirmación con ventana emergente
    let confirmacion = confirm('¿Estás seguro de eliminar este usuario?');
    if (confirmacion) {
      this.usuarios = this.usuarios.filter(u => u._id !== id);
      // Guarda la lista actualizada en el servicio
      this.usuarioService.saveUsuario(this.usuarios);
      // Muestra una notificación de éxito
      this.snackBar.open('Usuario eliminado correctamente', 'Cerrar', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top',
      });
    }
  }

}
