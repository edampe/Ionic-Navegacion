import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Pagina3Page } from '../index.paginas';



@Component({
  selector: 'page-pagina2',
  templateUrl: 'pagina2.html',
})
export class Pagina2Page {

  pagina3: any = Pagina3Page

  mutantes:any[] = [
    {
      nombre:"Mangeno",
      poder: "Controlar metales"
    },
    {
      nombre:"Wolverine",
      poder:"Regeneracion"
    },
    {
      nombre:"Profesor X",
      poder:"Psiquico"
    },
    {
      nombre:"Gambito",
      poder:"Cargar objetos inanimados con energia."
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  irPagina3(mutante: any){
    console.log(mutante)

    this.navCtrl.push( Pagina3Page, { 'mutante': mutante })
  }


}
