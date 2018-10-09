import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CENTROACOPIOLUISCARLOSGALANPage } from '../c-entroacopioluiscarlosgalan/c-entroacopioluiscarlosgalan';
import { RECYCLEANPage } from '../r-ecyclean/r-ecyclean';
import { ReciclarPage } from '../reciclar/reciclar';
import { PlasticoPage } from '../plastico/plastico';
import { CENTROACOPI0QUIRIGUAPage } from '../c-entroacopi0quirigua/c-entroacopi0quirigua';
import { PapelYCartonPage } from '../papel-ycarton/papel-ycarton';
import { CENTROACOPI0RINCONPage } from '../c-entroacopi0rincon/c-entroacopi0rincon';
import { MetalPage } from '../metal/metal';
import { OtrosPage } from '../otros/otros';
import { CMoReciclarPage } from '../c-mo-reciclar/c-mo-reciclar';
import { ProgresoPage } from '../progreso/progreso';
import { CentrosDeAcopioPage } from '../centros-de-acopio/centros-de-acopio';
import { MAPACENTROACOPIORINCONPage } from '../m-apacentroacopiorincon/m-apacentroacopiorincon';
import { MAPACENTROACOPIOLUISCARLOSGALANPage } from '../m-apacentroacopioluiscarlosgalan/m-apacentroacopioluiscarlosgalan';
import { MAPACENTROACOPI0QUIRIGUAPage } from '../m-apacentroacopi0quirigua/m-apacentroacopi0quirigua';

@Component({
  selector: 'page-vidrio',
  templateUrl: 'vidrio.html'
})
export class VidrioPage {

  constructor(public navCtrl: NavController) {
  }
  goToCENTROACOPIOLUISCARLOSGALAN(params){
    if (!params) params = {};
    this.navCtrl.push(CENTROACOPIOLUISCARLOSGALANPage);
  }goToRECYCLEAN(params){
    if (!params) params = {};
    this.navCtrl.push(RECYCLEANPage);
  }goToReciclar(params){
    if (!params) params = {};
    this.navCtrl.push(ReciclarPage);
  }goToVidrio(params){
    if (!params) params = {};
    this.navCtrl.push(VidrioPage);
  }goToPlastico(params){
    if (!params) params = {};
    this.navCtrl.push(PlasticoPage);
  }goToCENTROACOPI0QUIRIGUA(params){
    if (!params) params = {};
    this.navCtrl.push(CENTROACOPI0QUIRIGUAPage);
  }goToPapelYCarton(params){
    if (!params) params = {};
    this.navCtrl.push(PapelYCartonPage);
  }goToCENTROACOPI0RINCON(params){
    if (!params) params = {};
    this.navCtrl.push(CENTROACOPI0RINCONPage);
  }goToMetal(params){
    if (!params) params = {};
    this.navCtrl.push(MetalPage);
  }goToOtros(params){
    if (!params) params = {};
    this.navCtrl.push(OtrosPage);
  }goToCMoReciclar(params){
    if (!params) params = {};
    this.navCtrl.push(CMoReciclarPage);
  }goToProgreso(params){
    if (!params) params = {};
    this.navCtrl.push(ProgresoPage);
  }goToCentrosDeAcopio(params){
    if (!params) params = {};
    this.navCtrl.push(CentrosDeAcopioPage);
  }goToMAPACENTROACOPIORINCON(params){
    if (!params) params = {};
    this.navCtrl.push(MAPACENTROACOPIORINCONPage);
  }goToMAPACENTROACOPIOLUISCARLOSGALAN(params){
    if (!params) params = {};
    this.navCtrl.push(MAPACENTROACOPIOLUISCARLOSGALANPage);
  }goToMAPACENTROACOPI0QUIRIGUA(params){
    if (!params) params = {};
    this.navCtrl.push(MAPACENTROACOPI0QUIRIGUAPage);
  }
}
