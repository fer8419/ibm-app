import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ClienteComponent } from './clientes/cliente.component';
import { TarjetaComponent } from './tarjetas/tarjeta.component';
import { AsesorComponent } from './asesores/asesor.component';

import { ClienteService } from './clientes/cliente.service';
import { TarjetaService } from './tarjetas/tarjeta.service';
import { AsesorService } from './asesores/asesor.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/listar-clientes', pathMatch: 'full' },

  {
    path: 'listar-clientes',
    component: ClienteComponent
  },

  {
    path: 'crear-tarjetas',
    component: TarjetaComponent
  },

  {
    path: 'listar-asesores',
    component: AsesorComponent
  }  
];


@NgModule({
  declarations: [
    AppComponent,
    ClienteComponent,
    TarjetaComponent,
    AsesorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ClienteService,TarjetaService,AsesorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
