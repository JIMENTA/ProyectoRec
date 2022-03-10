import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandComponent } from './components/land/land.component';
import { LoginComponent } from './components/login/login.component';
import { MapComponent } from './components/map/map.component';
import { NewsComponent } from './components/news/news.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ElectrodomesticosComponent } from './pages/electrodomesticos/electrodomesticos.component';
import { MetalesComponent } from './pages/metales/metales.component';
import { OrganicosComponent } from './pages/organicos/organicos.component';
import { PapelesComponent } from './pages/papeles/papeles.component';
import { PlasticosComponent } from './pages/plasticos/plasticos.component';
import { RopaComponent } from './pages/ropa/ropa.component';

const routes: Routes = [
  {path:'', component: LandComponent, pathMatch:'full'},
  {path:'map', component: MapComponent},
  {path:'news', component: NewsComponent},
  {path:'login', component: LoginComponent},
  // {path:'info', component: LandComponent},
  {path:'organico', component: OrganicosComponent},
  {path:'papel', component: PapelesComponent},
  {path:'plastico', component: PlasticosComponent},
  {path:'ropa', component: RopaComponent},
  {path:'metales', component: MetalesComponent},
  {path:'electrodomesticos', component:ElectrodomesticosComponent},
  {path:'agregar', component: AgregarComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
