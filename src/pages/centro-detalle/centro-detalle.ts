import { Component } from '@angular/core';
import {  NavController } from 'ionic-angular';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { RECYCLEANPage } from '../r-ecyclean/r-ecyclean';
import { ReciclarPage } from '../reciclar/reciclar';
import { VidrioPage } from '../vidrio/vidrio';
import { PlasticoPage } from '../plastico/plastico';
import { PapelYCartonPage } from '../papel-ycarton/papel-ycarton';
import { MetalPage } from '../metal/metal';
import { OtrosPage } from '../otros/otros';
import { CentrosDeAcopioPage } from '../centros-de-acopio/centros-de-acopio';


//@IonicPage()
@Component({
  selector: 'page-centro-detalle',
  templateUrl: 'centro-detalle.html',
})


export class CentroDetallePage {

  constructor(public navCtrl: NavController){
    //, public navParams: NavParams) {
  }


   ionViewDidLoad() {
     console.log('ionViewDidLoad CentroDetallePage');
   }

  goToCentroDetalle(params){
    if (!params) params = {};
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
