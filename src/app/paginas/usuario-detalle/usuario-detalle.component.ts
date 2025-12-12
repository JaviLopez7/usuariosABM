import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-usuario-detalle',
  imports: [RouterLink, CommonModule, MatIconModule, MatButtonModule, MatCardModule],
  templateUrl: './usuario-detalle.component.html',
  styleUrl: './usuario-detalle.component.css'
})
export class UsuarioDetalleComponent {

  // Input: recibe el usuario desde el componente padre
  @Input('miAtributo')
  public miUsuario: Usuario = new Usuario();
  
  // Input: indica si se debe mostrar el botón de editar
  @Input() mostrarBotonEditar: boolean = false;
  // Input: indica si se debe mostrar el botón de eliminar
  @Input() mostrarBotonEliminar: boolean = false;
  // Input: indica si se debe mostrar el botón de volver
  @Input() mostrarBotonVolver: boolean = false;

  // Output: emite el ID del usuario cuando se hace clic en "Editar"
  @Output() edita = new EventEmitter<number>();
  // Output: emite el ID del usuario cuando se hace clic en "Eliminar"
  @Output() elimina = new EventEmitter<number>();

  // Método que emite el evento de edición
  public editar() {
    this.edita.emit(this.miUsuario._id);
  }

  // Método que emite el evento de eliminación
  public eliminar() {
    this.elimina.emit(this.miUsuario._id);
  }
  
}