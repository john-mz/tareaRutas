import { Component } from '@angular/core';
import { CatalogoService } from './catalogo.service';
import { Agregar } from './agregar/agregar';
import { Editar } from './editar/editar';

@Component({
  selector: 'app-catalogo',
  imports: [Agregar, Editar],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {
  IsAgregar = false;
  IsEditar = false;
  nombreEditar = "";
  razaEditar: string = "";
  edadEditar: number = 0;
  colorEditar: string = "";
  pais_origenEditar: string = "";
  disciplina_ecuestreEditar: string = "";

  onStartAdding(){
    this.IsAgregar = true;
  }

  onCloseAdding(){
    this.IsAgregar = false;
  }

  onCloseEditing(){
    this.IsEditar = false;
  }

  constructor(private CatalogoService: CatalogoService){}

  eliminar(nombre: string){
    this.CatalogoService.eliminar(nombre);
  }

  editar(nombre: string, raza: string, edad: number, color: string, pais_origen: string, disciplina_ecuestre: string){
    this.IsEditar = true;
    this.nombreEditar = nombre;
    this.razaEditar = raza;
    this.edadEditar = edad;
    this.colorEditar = color;
    this.pais_origenEditar = pais_origen;
    this.disciplina_ecuestreEditar = disciplina_ecuestre;
  }

  get consultar(){
    return this.CatalogoService.consultar();
  }
}
