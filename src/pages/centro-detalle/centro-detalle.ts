import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
  //IonicPage, NavController, NavParams } from 'ionic-angular';
  //Prueba de comentario, gonzalo gonzalez;


import { RECYCLEANPage } from '../r-ecyclean/r-ecyclean';
import { ReciclarPage } from '../reciclar/reciclar';
import { VidrioPage } from '../vidrio/vidrio';
import { PlasticoPage } from '../plastico/plastico';
import { PapelYCartonPage } from '../papel-ycarton/papel-ycarton';
import { MetalPage } from '../metal/metal';
import { OtrosPage } from '../otros/otros';
import { CentrosDeAcopioPage } from '../centros-de-acopio/centros-de-acopio';
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';


//@IonicPage()
@Component({
  selector: 'page-centro-detalle',
  templateUrl: 'centro-detalle.html',
})


export class CentroDetallePage {

  centro: any[]=[];
  tipos: any[]=[];
  todoslostipos: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public apiservice: ApiserviceProvider) {
    //console.log(NavParams)
    this.centro=navParams.get('centro');
    console.log(this.centro);
  }


   ionViewDidLoad() {
     console.log('ionViewDidLoad CentroDetallePage');
     console.log('ID del centro: '+ this.centro.id)
     this.apiservice.getTypes(this.centro.id).subscribe(
      data => {
        this.tipos = data as any;
        console.log( 'API Respuesta:  ' + this.tipos.length + ' items.' );
        console.log(  this.tipos);
        console.log( 'Esta es la variable data:');
        console.log( data);

        // for (let tipo in this.tipos) {
        //   console.log(tipo.material);
        // }

        this.tipos.forEach(function (tipo){
          console.log(tipo.material);
          this.todoslostipos=this.todoslostipos+tipo.material+', ';
        });
        console.log('Estos son todos los tipos');
        console.log(this.todoslostipos);
      },
      error => {
        this.tipos = [ { 'usuario': 'Admin', 'Error': error['message'] } ]
        console.log(error.message);
      }
    )

   }

  goToCentroDetalle(params){
    if (!params) params = {};
    console.log("parametros:" + params);
    this.navCtrl.push(CentroDetallePage);
  }

  goToRECYCLEAN(params){
    if (!params) params = {};
    this.navCtrl.push(RECYCLEANPage);
  }goToReciclar(params){
    if (!params) params = {};
    this.navCtrl.push(ReciclarPage);
  }
  goToVidrio(params){
    if (!params) params = {};
    this.navCtrl.push(VidrioPage);
  }
  goToPlastico(params){
    if (!params) params = {};
    this.navCtrl.push(PlasticoPage);
  }
  goToPapelYCarton(params){
    if (!params) params = {};
    this.navCtrl.push(PapelYCartonPage);
  }
  goToMetal(params){
    if (!params) params = {};
    this.navCtrl.push(MetalPage);
  }
  goToOtros(params){
    if (!params) params = {};
    this.navCtrl.push(OtrosPage);
  }
  goToCentrosDeAcopio(params){
    if (!params) params = {};
    this.navCtrl.push(CentrosDeAcopioPage);
  }
}
