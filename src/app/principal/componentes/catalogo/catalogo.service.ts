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


  editar(){}

  eliminar(nombre: string){
    this.catalogo = this.catalogo.filter(item => item.nombre != nombre)
  }
  consultar (){
    return this.catalogo;
  }

}
