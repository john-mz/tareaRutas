import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CatalogoService } from '../catalogo.service';

@Component({
  selector: 'app-editar',
  imports: [FormsModule],
  templateUrl: './editar.html',
  styleUrl: './editar.css'
})
export class Editar {
  @Output() close = new EventEmitter<void>();
  @Input({required: true}) nombre!: string;
  @Input({required: true}) raza!: string;
  @Input({required: true}) edad!: number;
  @Input({required: true}) color!: string;
  @Input({required: true}) pais_origen!: string;
  @Input({required: true}) disciplina_ecuestre!: string;

  private CatalogoService = inject(CatalogoService);

  onClose(){
    this.close.emit();
  }

  onSubmit(){
    this.CatalogoService.editar(this.nombre, this.raza, this.edad, this.color, this.pais_origen, this.disciplina_ecuestre);
    
    this.close.emit();
  }
}
