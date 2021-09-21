import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegistarInsumoComponent } from './componentes/registar-insumo/registar-insumo.component';
import { RegistrarContratoComponent} from './componentes/registrar-contrato/registrar-contrato.component';
import { ConsultarcontratoComponent } from './consultarcontrato/consultarcontrato.component';

const routes: Routes = [

  {path:'', redirectTo: '/registrar-contrato', pathMatch: 'full'},
  {path: 'registar-insumo', component: RegistarInsumoComponent},
  {path: 'registrar-contrato', component: RegistrarContratoComponent},
  {path: 'consultarcontrato', component: ConsultarcontratoComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
