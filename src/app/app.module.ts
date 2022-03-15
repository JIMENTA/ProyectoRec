import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';


import { MapComponent } from './components/map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';

import {MatMenuModule} from '@angular/material/menu';
import {MatInputModule} from '@angular/material/input';

import { NavbarComponent } from './components/navbar/navbar.component';
import { NewsComponent } from './components/news/news.component';
import { LandComponent } from './components/land/land.component';
import { OrganicosComponent } from './pages/organicos/organicos.component';
import { PapelesComponent } from './pages/papeles/papeles.component';
import { PlasticosComponent } from './pages/plasticos/plasticos.component';
import { RopaComponent } from './pages/ropa/ropa.component';
import { MetalesComponent } from './pages/metales/metales.component';
import { ElectrodomesticosComponent } from './pages/electrodomesticos/electrodomesticos.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { LoginComponent } from './components/login/login.component';
import { environment } from 'src/environments/environment';
import { RegisterComponent } from './components/register/register.component';
import { VidrioComponent } from './pages/vidrio/vidrio.component';
import { InfoComponent } from './pages/info/info.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NewsComponent,
    LandComponent,
    MapComponent,
    OrganicosComponent,
    PapelesComponent,
    PlasticosComponent,
    RopaComponent,
    MetalesComponent,
    ElectrodomesticosComponent,
    AgregarComponent,
    LoginComponent,
    RegisterComponent,
    InfoComponent,
    VidrioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatMenuModule,
    MatInputModule
    
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
