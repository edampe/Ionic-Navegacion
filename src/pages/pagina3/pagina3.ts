import { Component } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';


@Component({
  selector: 'page-pagina3',
  templateUrl: 'pagina3.html',
})
export class Pagina3Page {

  mutante: any = {};
  
  constructor(private navParams: NavParams,
              private navController: NavController) {

    console.log( navParams )

    this.mutante = navParams.get("mutante")

  }

  irAtras(){

    this.navController.pop()

  }

  irRoot(){

    this.navController.popToRoot()

  }



}
