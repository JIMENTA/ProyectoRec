import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandComponent } from './components/land/land.component';
import { MapComponent } from './components/map/map.component';
import { NewsComponent } from './components/news/news.component';

const routes: Routes = [
  {path:'', component: LandComponent, pathMatch:'full'},
  {path:'map', component: MapComponent},
  {path:'news', component: NewsComponent},
  // {path:'login', component: LandComponent},
  // {path:'info', component: LandComponent},
  // {path:'organico', component: LandComponent},
  // {path:'papel', component: LandComponent},
  // {path:'plastico', component: LandComponent},
  // {path:'ropa', component: LandComponent},
  // {path:'metales', component: LandComponent},
  // {path:'agregar', component: LandComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
