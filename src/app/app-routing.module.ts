import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ItemComponent } from './pages/item/item.component';
import { AboutComponent } from './pages/about/about.component';
import { BusquedaComponent } from './pages/busqueda/busqueda.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'about', component: AboutComponent},
  {path: 'buscar/:textBusq', component: BusquedaComponent},


  /* En caso de error */
  {path: '**', component: HomeComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
