import { Component } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { UsuarioDetalleComponent } from '../usuario-detalle/usuario-detalle.component';
import { UsuarioService } from '../../servicios/usuario.service';

@Component({
  selector: 'app-modificar',
  imports: [RouterModule, CommonModule, MatIconModule, UsuarioDetalleComponent],
  templateUrl: './modificar.component.html',
  styleUrl: './modificar.component.css'
})
export class ModificarComponent {

  public usuarios: Array<Usuario>;

  constructor(public route: Router,
    public usuarioService: UsuarioService) {
    // Se obtienen los usuarios al inicializar el componente
    this.usuarios = this.usuarioService.Usuario;
  }

  // Método que navega a la ruta de alta/edición con el ID del usuario
  public editar(id: number) {
    // Redirige al componente de alta pasando el ID para entrar en modo edición
    this.route.navigateByUrl("alta/" + id.toString());
  }
}
