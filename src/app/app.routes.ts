import { Routes } from '@angular/router';
import { Principal } from './principal/estructura/principal';
import { Catalogo } from './principal/componentes/catalogo/catalogo';
import { Noencontro } from './principal/componentes/noencontro/noencontro';
import { Inicio } from './principal/componentes/inicio/inicio';



export const routes: Routes = [
    {
        path: '', component: Principal,
        children:
        [   
            {path: 'inicio', component: Inicio},
            {path: 'catalogo', component: Catalogo},
            {path: '', redirectTo: 'inicio', pathMatch: 'full'}
        ]
    },   
    {path: '**', component: Noencontro} 
];
