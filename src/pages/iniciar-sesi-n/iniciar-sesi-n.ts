import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RECYCLEANPage } from '../r-ecyclean/r-ecyclean';
import { ReciclarPage } from '../reciclar/reciclar';
import { VidrioPage } from '../vidrio/vidrio';
import { CENTROACOPIOLUISCARLOSGALANPage } from '../c-entroacopioluiscarlosgalan/c-entroacopioluiscarlosgalan';
import { CENTROACOPI0QUIRIGUAPage } from '../c-entroacopi0quirigua/c-entroacopi0quirigua';
import { CENTROACOPI0RINCONPage } from '../c-entroacopi0rincon/c-entroacopi0rincon';
import { PlasticoPage } from '../plastico/plastico';
import { PapelYCartonPage } from '../papel-ycarton/papel-ycarton';
import { MetalPage } from '../metal/metal';
import { OtrosPage } from '../otros/otros';
import { CMoReciclarPage } from '../c-mo-reciclar/c-mo-reciclar';
import { ProgresoPage } from '../progreso/progreso';
import { CentrosDeAcopioPage } from '../centros-de-acopio/centros-de-acopio';
import { MAPACENTROACOPIORINCONPage } from '../m-apacentroacopiorincon/m-apacentroacopiorincon';
import { MAPACENTROACOPIOLUISCARLOSGALANPage } from '../m-apacentroacopioluiscarlosgalan/m-apacentroacopioluiscarlosgalan';
import { MAPACENTROACOPI0QUIRIGUAPage } from '../m-apacentroacopi0quirigua/m-apacentroacopi0quirigua';
import { RegistroPage } from '../registro/registro';
import { AplicacionCentroDeAcopioPage } from '../aplicacion-centro-de-acopio/aplicacion-centro-de-acopio';

@Component({
  selector: 'page-iniciar-sesi-n',
  templateUrl: 'iniciar-sesi-n.html'
})
export class IniciarSesiNPage {

  constructor(public navCtrl: NavController) {
  }
  goToRECYCLEAN(params){
    if (!params) params = {};
    this.navCtrl.push(RECYCLEANPage);
  }goToReciclar(params){
    if (!params) params = {};
    this.navCtrl.push(ReciclarPage);
  }goToVidrio(params){
    if (!params) params = {};
    this.navCtrl.push(VidrioPage);
  }goToCENTROACOPIOLUISCARLOSGALAN(params){
    if (!params) params = {};
    this.navCtrl.push(CENTROACOPIOLUISCARLOSGALANPage);
  }goToCENTROACOPI0QUIRIGUA(params){
    if (!params) params = {};
    this.navCtrl.push(CENTROACOPI0QUIRIGUAPage);
  }goToCENTROACOPI0RINCON(params){
    if (!params) params = {};
    this.navCtrl.push(CENTROACOPI0RINCONPage);
  }goToPlastico(params){
    if (!params) params = {};
    this.navCtrl.push(PlasticoPage);
  }goToPapelYCarton(params){
    if (!params) params = {};
    this.navCtrl.push(PapelYCartonPage);
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
  }goToRegistro(params){
    if (!params) params = {};
    this.navCtrl.push(RegistroPage);
  }goToAplicacionCentroDeAcopio(params){
    if (!params) params = {};
    this.navCtrl.push(AplicacionCentroDeAcopioPage);
  }
}
