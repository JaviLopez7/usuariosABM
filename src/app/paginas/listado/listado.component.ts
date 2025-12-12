import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { Router, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UsuarioService } from '../../servicios/usuario.service';
import { UsuarioDetalleComponent } from '../usuario-detalle/usuario-detalle.component';


@Component({
  selector: 'app-listado',
  imports: [RouterModule ,CommonModule, MatIconModule, UsuarioDetalleComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  
  // Lista de usuarios que se mostrarán en la vista
  public usuarios: Array<Usuario>;

  constructor(public rout:Router,
    public usuarioService: UsuarioService) {
    // Se obtienen los usuarios desde el servicio y se asignan al Array local
    this.usuarios = this.usuarioService.Usuario;
  }
  
}
