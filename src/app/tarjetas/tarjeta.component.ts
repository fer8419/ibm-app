import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TarjetaService } from './tarjeta.service';
import { ClienteService } from '../clientes//cliente.service';
import { Cliente } from '../clientes/cliente-form'
import { Tarjeta } from './tarjeta-form';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html'
})
export class TarjetaComponent implements OnInit {

  private clientes: Cliente[];
  private tarjetaForm: Tarjeta;

  constructor(private tarjetaService: TarjetaService, private clienteService: ClienteService) { }

  ngOnInit() {    
    this.clientes = [];
    this.tarjetaForm = new Tarjeta();
    this.listarClientes();
  }

  listarClientes() {
    this.clienteService.listar()
      .subscribe(
        data => {this.clientes = data}, 
        error => console.error(error)
      );
  }

  eliminar(codigo: number) {
    this.tarjetaService.eliminar(codigo)
      .subscribe(
        result => this.accionesCrud("Registro eliminado"), 
        error => alert(error.error || "Error")
      );
  }

  accionesCrud(msg: string) {
    alert(msg);
  }  

  insertar() {
    this.tarjetaService.insertar(this.tarjetaForm)
      .subscribe(
        result => this.accionesGuardar("Registro creado"), 
        error => alert(error.error || "Error")
      );
  }

  editar() {
    this.tarjetaService.editar(this.tarjetaForm)
      .subscribe(
        result => this.accionesGuardar("Registro actualizado"), 
        error => alert(error.error || "Error")
      );
  }

  consultarEdicion(codigo: number) {
    this.tarjetaService.consultar(codigo)
      .subscribe(
        result => this.setClienteFormEdicion(result as Tarjeta), 
        error => alert(error.error || "Error")
      );
  }

  accionesGuardar(msg: string) {
    this.accionesCrud(msg);
    this.setClienteForm(); 
  }

  setClienteForm() {
    this.tarjetaForm = new Tarjeta();
  }

  setClienteFormEdicion(tarjeta: Tarjeta) {
    this.tarjetaForm = tarjeta;
  }
}