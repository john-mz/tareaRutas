import { Injectable } from '@angular/core';
import  catalogoData  from '../../../../../public/json/catalogo_caballos.json'

interface Caballo {
  nombre: string;
  raza: string;
  edad: number;
  color: string;
  pais_origen: string;
  disciplina_ecuestre: string;
}

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private catalogo = catalogoData;

  agregar(objeto: Caballo){
    this.catalogo.unshift(objeto);
  }


  editar(nombre: string, raza: string, edad: number, color: string, pais_origen: string, disciplina_ecuestre: string){
    for(let i = 0; i < this.catalogo.length; i++){
      if (this.catalogo[i].nombre == nombre){
        this.catalogo[i].raza = raza;
        this.catalogo[i].edad = edad;
        this.catalogo[i].color = color;
        this.catalogo[i].pais_origen = pais_origen;
        this.catalogo[i].disciplina_ecuestre = disciplina_ecuestre;
      }
    }
  }

  eliminar(nombre: string){
    this.catalogo = this.catalogo.filter(item => item.nombre != nombre)
  }
  consultar (){
    return this.catalogo;
  }

}
