import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { AsesorService } from './asesor.service';
import { Asesor } from './asesor-form'

@Component({
  selector: 'app-asesor',
  templateUrl: './asesor.component.html'
})
export class AsesorComponent implements OnInit {

  private asesores: Asesor[];
  private asesorForm: Asesor;

  constructor(private asesorService: AsesorService) { }

  ngOnInit() {
    this.asesores = [];
    this.asesorForm = new Asesor();
    this.listar();
  }

  listar() {
    this.asesorService.listar()
      .subscribe(
        data => {this.asesores = data}, 
        error => console.error(error)
      );
  }

  eliminar(codigo: number) {
    this.asesorService.eliminar(codigo)
      .subscribe(
        result => this.accionesCrud("Registro eliminado"), 
        error => alert(error.error || "Error")
      );
  }

  accionesCrud(msg: string) {
    this.listar();
    alert(msg);
  }  

  guardar() {
    if(this.asesorForm.codigo) {
        this.editar();
    } else {
        this.insertar();
    }
  }

  insertar() {
    this.asesorService.insertar(this.asesorForm)
      .subscribe(
        result => this.accionesGuardar("Registro creado"), 
        error => alert(error.error || "Error")
      );
  }

  editar() {
    this.asesorService.editar(this.asesorForm)
      .subscribe(
        result => this.accionesGuardar("Registro actualizado"), 
        error => alert(error.error || "Error")
      );
  }

  consultarEdicion(codigo: number) {
    this.asesorService.consultar(codigo)
      .subscribe(
        result => this.setAsesorFormEdicion(result as Asesor), 
        error => alert(error.error || "Error")
      );
  }

  accionesGuardar(msg: string) {
    this.accionesCrud(msg);
    this.setAsesorForm(); 
  }

  setAsesorForm() {
    this.asesorForm.codigo = null;
    this.asesorForm.nombre = null;
    this.asesorForm.especialidad = null;
  }

  setAsesorFormEdicion(asesor: Asesor) {
    this.asesorForm = asesor;
  }
}