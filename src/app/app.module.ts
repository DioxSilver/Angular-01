import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColaboradoresComponent } from './feature/components/colaboradores/colaboradores.component';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import { ColaboradorComponent } from './feature/components/colaborador/colaborador.component';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FeatureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
