import { Component } from '@angular/core';
import { Peoples } from './peoples'; //Importe a interface que irá utilizar

@Component({
  selector: 'app-peoples',
  templateUrl: './peoples.component.html',
  styleUrls: ['./peoples.component.scss']
})
export class PeoplesComponent {

  // Criamos peoples e tipamos como um Array de interface Peoples.
  // Ou seja, agora necessariamente só será aceito o tipo de dado em peoples, um Array
  // que tenha nome: string, e sobrenome: string (explicado no peoples.ts)
  public peoples: Peoples[] = [
    { nome: 'Yas', sobrenome: 'Honda' }, //cada objeto desse será um p do *ngFor no peoples.component.html
    { nome: 'Lucas', sobrenome: 'Fernandes' },
    { nome: 'Lucia', sobrenome: 'Freire' },
  ]

  // variavel count tipo numero, recebe o tamanho do peoples
  count: number = this.peoples.length

  // Criamos agora outra variavel para receber os valores vindos do input, que esta sendo
  // enviado para ca, através do [(ngModel)]
  // tipamos people como Peoples, e necessariamente passamos nome e sobrenome
  // ambos com valores iniciais vazios, pois, os inputs deverão iniciar com valor vazio
  // Por conta do [(ngModel)], assim que digitado valor no input, ele irá passar para este people
  // os valores. Se voce digitar no input nome = Yas sobrenome = Honda
  // automaticamente aqui não será mais vazio
  // public people: Peoples = {
  //   nome: 'Yas',
  //   sobrenome: 'Honda'
  // }
  public people: Peoples = {
    nome: '',
    sobrenome: ''
  }

  // Função que chamamos com o (click)
  enviarPessoa() {
    // ! transforma em um boolean
    // se Nan, Undefined, ou vazio, resultado é true
    if (this.people.nome == '' || this.people.sobrenome == "") {
      alert('Insira um valor válido')
    } else {
      // push é um método que adiciona um elemento ao final de um array
      // adicione ao final do array peoples (que ja existe), o elemento people (que ja existe)
      //this.peoples.push(this.people)
      this.peoples.push(this.people)
    }
    // sempre que adicionar um dado, o count será atualizado com o tamanho
    // atual do array de peoples
    this.count = this.peoples.length
    // chamamos a função de limpar aqui, pois queremos, que assim que clicar em Enviar, ele apague
    // os nomes no input
    this.limparNome()
  }

  // Para limpar os inputs, pegamos a variavel people criada la em cima, que agora tem algum valor
  // pois após digitarem no input, ela deixa de ser vazia. E agora setamos ela novamente como vazia
  limparNome() {
    this.people = {
      nome: '',
      sobrenome: ''
    }
  }
}
