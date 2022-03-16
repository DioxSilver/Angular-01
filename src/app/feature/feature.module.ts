import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';



@NgModule({
  declarations: [
    ColaboradoresComponent
  ],
  exports:[
     ColaboradoresComponent
    ],

  imports: [
    CommonModule,
    
  ]
})
export class FeatureModule { }
