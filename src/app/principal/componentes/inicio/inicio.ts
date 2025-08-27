import { Component } from '@angular/core';
import { Info } from './info/info';
import { Main } from './main/main';

@Component({
  selector: 'app-inicio',
  imports: [Info, Main],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {

}
