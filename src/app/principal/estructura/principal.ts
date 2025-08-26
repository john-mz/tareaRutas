import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})
export class Principal {

}
