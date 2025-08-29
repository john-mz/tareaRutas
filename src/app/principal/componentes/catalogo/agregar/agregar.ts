import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CatalogoService } from '../catalogo.service';

@Component({
  selector: 'app-agregar',
  imports: [FormsModule],
  templateUrl: './agregar.html',
  styleUrl: './agregar.css'
})
export class Agregar {
  @Output() close = new EventEmitter<void>();
  nombre: string = "";
  raza: string = "";
  edad: number = 0;
  color: string = "";
  pais_origen: string = "";
  disciplina_ecuestre: string = "";

  private CatalogoService = inject(CatalogoService);

  onClose(){
    this.close.emit();
  }

  onSubmit(){
    this.CatalogoService.agregar({nombre: this.nombre, raza: this.raza, edad: this.edad, color: this.color, pais_origen: this.pais_origen, disciplina_ecuestre: this.disciplina_ecuestre});
    
    this.close.emit();
  }
}
