import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SlideComponent } from './slide/slide.component';
import { HomeComponent } from './home/home.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';

const routes: Routes = [
  // path é o nome do caminho, você pode dar qualquer nome, o path vazio ou path: '/', indica que será
  // o primeiro caminho. ex: http://localhost:4200
  // component: voce indica qual component você deseja que seja renderizado no caminho
  { path: '', component: HomeComponent },
  // path: 'slide' ficará http://localhost:4200/slide
  { path: 'slide', component: SlideComponent },
  { path: 'peoples', component: PeoplesComponent },
  { path: 'calculadora', component: CalculadoraComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
