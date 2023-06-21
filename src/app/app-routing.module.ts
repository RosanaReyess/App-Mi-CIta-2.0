import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ListarCitasComponent } from './components/listar-citas/listar-citas.component';
import { CrearCitasComponent } from './components/crear-citas/crear-citas.component';

const routes: Routes = [
  {path:'', component: ListarCitasComponent},
  {path:'crear-citas', component:CrearCitasComponent},
  {path:'editar-citas/:id', component:CrearCitasComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
