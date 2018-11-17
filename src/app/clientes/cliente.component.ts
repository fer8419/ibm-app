import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ClienteService } from './cliente.service';
import { Cliente } from './cliente-form'
import { Tarjeta } from '../tarjetas/tarjeta-form';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html'
})
export class ClienteComponent implements OnInit {

  private clientes: Cliente[];
  private clienteForm: Cliente;

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clientes = [];
    this.clienteForm = new Cliente();
    this.listar();
  }

  listar() {
    this.clienteService.listar()
      .subscribe(
        data => {this.clientes = data}, 
        error => console.error(error)
      );
  }

  eliminar(codigo: number) {
    this.clienteService.eliminar(codigo)
      .subscribe(
        result => this.accionesCrud("Registro eliminado"), 
        error => alert(error.error || "Error")
      );
  }

  accionesCrud(msg: string) {
    this.listar();
    alert(msg);
  }

  concatenarNumero(tarjetas: Tarjeta[]): string {    
    return tarjetas.map(x=>x.numero).join();
  }

  guardar() {
    if(this.clienteForm.codigo) {
        this.editar();
    } else {
        this.insertar();
    }
  }

  insertar() {
    this.clienteService.insertar(this.clienteForm)
      .subscribe(
        result => this.accionesGuardar("Registro creado"), 
        error => alert(error.error || "Error")
      );
  }

  editar() {
    this.clienteService.editar(this.clienteForm)
      .subscribe(
        result => this.accionesGuardar("Registro actualizado"), 
        error => alert(error.error || "Error")
      );
  }

  consultarEdicion(codigo: number) {
    this.clienteService.consultar(codigo)
      .subscribe(
        result => this.setClienteFormEdicion(result as Cliente), 
        error => alert(error.error || "Error")
      );
  }

  accionesGuardar(msg: string) {
    this.accionesCrud(msg);
    this.setClienteForm(); 
  }

  setClienteForm() {
    this.clienteForm.codigo = null;
    this.clienteForm.nombre = null;
    this.clienteForm.direccion = null;
    this.clienteForm.telefono = null;
    this.clienteForm.ciudad = null;
  }

  setClienteFormEdicion(cliente: Cliente) {
    this.clienteForm = cliente;
  }
}