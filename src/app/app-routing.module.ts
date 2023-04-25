import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
  {path:'formulario', component:FormularioComponent},
  {path: 'principal', component: PrincipalComponent},
  {path: '', redirectTo:'principal',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
