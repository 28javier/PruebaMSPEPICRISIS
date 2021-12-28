import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './components/clientes/clientes.component';
import { RegistrarClienteComponent } from './components/registrar-cliente/registrar-cliente.component';

const routes: Routes = [

  {
    path: '', component: ClientesComponent

  },

  {
    path: 'registroCliente', component: RegistrarClienteComponent
  },
  {
    path: '**', redirectTo: '', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
