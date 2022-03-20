import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { ColaboradorComponent } from './components/colaborador/colaborador.component';



@NgModule({
  declarations: [
    ColaboradoresComponent,
    ColaboradorComponent
  ],
  exports:[
     ColaboradoresComponent,
     ColaboradorComponent
    ],

  imports: [
    CommonModule,
    
    
  ]
})
export class FeatureModule { }
