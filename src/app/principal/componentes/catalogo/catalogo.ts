import { Component } from '@angular/core';
import { CatalogoService } from './catalogo.service';
import { Agregar } from './agregar/agregar';

@Component({
  selector: 'app-catalogo',
  imports: [Agregar],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.css'
})
export class Catalogo {
  IsAgregar = false;

  onStartAdding(){
    this.IsAgregar = true;
  }

  onCloseAdding(){
    this.IsAgregar = false;
  }

  constructor(private CatalogoService: CatalogoService){}

  eliminar(nombre: string){
    this.CatalogoService.eliminar(nombre);
  }

  editar(){
    
    this.CatalogoService.editar();
  }
  get consultar(){
    return this.CatalogoService.consultar();
  }
}
