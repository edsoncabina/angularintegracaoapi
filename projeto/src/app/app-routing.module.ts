import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';



const routes: Routes = [
  { path: 'home', 
  loadChildren:'./home/home.module#HomeModule'},//Para fazer carregamento lease load
  { path: 'usuario', 
  loadChildren:'./usuario/usuario.module#UsuarioModule' },
  { path: '', 
  pathMatch:'full',
  redirectTo:'/home' },//Caso nao tenha nada na Url

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash:true})
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
