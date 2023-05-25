import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; //Importação para utilizar o ngModel

//component
import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { HomeComponent } from './home/home.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

@NgModule({
  declarations: [
    //Aqui é declarado todos components desse módulo
    //o vsCode faz isso automaticamente
    AppComponent,
    SlideComponent,
    HomeComponent,
    PeoplesComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule //Precisa colocar aqui o FormsModule para ser importado corretamente
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
