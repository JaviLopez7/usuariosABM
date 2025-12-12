import { Routes } from '@angular/router';
import { PrincipalComponent } from './paginas/principal/principal.component';
import { NoEncontradoComponent } from './paginas/no-encontrado/no-encontrado.component';
import { AltaComponent } from './paginas/alta/alta.component';
import { BajaComponent } from './paginas/baja/baja.component';
import { ModificarComponent } from './paginas/modificar/modificar.component';
import { ListadoComponent } from './paginas/listado/listado.component';

export const routes: Routes = [
    {path: '', component: PrincipalComponent},
    {path: 'principal', component: PrincipalComponent},
    {path: 'alta', component: AltaComponent},
    {path: 'alta/:id', component: AltaComponent},
    {path: 'baja', component: BajaComponent},
    {path: 'modificar', component: ModificarComponent},
    {path: 'listado', component: ListadoComponent},
    {path: '**', component: NoEncontradoComponent}
];
