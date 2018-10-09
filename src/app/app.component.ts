import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SolicitarRecoleccionPage } from '../pages/solicitar-recoleccion/solicitar-recoleccion';
import { ReciclarPage } from '../pages/reciclar/reciclar';
import { VidrioPage } from '../pages/vidrio/vidrio';
import { CENTROACOPIOLUISCARLOSGALANPage } from '../pages/c-entroacopioluiscarlosgalan/c-entroacopioluiscarlosgalan';
import { RECYCLEANPage } from '../pages/r-ecyclean/r-ecyclean';
import { CMoReciclarPage } from '../pages/c-mo-reciclar/c-mo-reciclar';
import { ProgresoPage } from '../pages/progreso/progreso';
import { CentrosDeAcopioPage } from '../pages/centros-de-acopio/centros-de-acopio';
import { MAPACENTROACOPIORINCONPage } from '../pages/m-apacentroacopiorincon/m-apacentroacopiorincon';
import { MAPACENTROACOPIOLUISCARLOSGALANPage } from '../pages/m-apacentroacopioluiscarlosgalan/m-apacentroacopioluiscarlosgalan';
import { MAPACENTROACOPI0QUIRIGUAPage } from '../pages/m-apacentroacopi0quirigua/m-apacentroacopi0quirigua';
import { CENTROACOPI0QUIRIGUAPage } from '../pages/c-entroacopi0quirigua/c-entroacopi0quirigua';
import { CENTROACOPI0RINCONPage } from '../pages/c-entroacopi0rincon/c-entroacopi0rincon';
import { PlasticoPage } from '../pages/plastico/plastico';
import { PapelYCartonPage } from '../pages/papel-ycarton/papel-ycarton';
import { MetalPage } from '../pages/metal/metal';
import { OtrosPage } from '../pages/otros/otros';
import { RegistroPage } from '../pages/registro/registro';
import { HomePage } from '../pages/home/home';
import { AplicacionCentroDeAcopioPage } from '../pages/aplicacion-centro-de-acopio/aplicacion-centro-de-acopio';


import { IniciarSesiNPage } from '../pages/iniciar-sesi-n/iniciar-sesi-n';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = IniciarSesiNPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToSolicitarRecoleccion(params){
    if (!params) params = {};
    this.navCtrl.setRoot(SolicitarRecoleccionPage);
  }goToReciclar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ReciclarPage);
  }goToVidrio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(VidrioPage);
  }goToCENTROACOPIOLUISCARLOSGALAN(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CENTROACOPIOLUISCARLOSGALANPage);
  }goToRECYCLEAN(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RECYCLEANPage);
  }goToCMoReciclar(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CMoReciclarPage);
  }goToProgreso(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ProgresoPage);
  }goToCentrosDeAcopio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CentrosDeAcopioPage);
  }goToMAPACENTROACOPIORINCON(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MAPACENTROACOPIORINCONPage);
  }goToMAPACENTROACOPIOLUISCARLOSGALAN(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MAPACENTROACOPIOLUISCARLOSGALANPage);
  }goToMAPACENTROACOPI0QUIRIGUA(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MAPACENTROACOPI0QUIRIGUAPage);
  }goToCENTROACOPI0QUIRIGUA(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CENTROACOPI0QUIRIGUAPage);
  }goToCENTROACOPI0RINCON(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CENTROACOPI0RINCONPage);
  }goToPlastico(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PlasticoPage);
  }goToPapelYCarton(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PapelYCartonPage);
  }goToMetal(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MetalPage);
  }goToOtros(params){
    if (!params) params = {};
    this.navCtrl.setRoot(OtrosPage);
  }goToIniciarSesiN(params){
    if (!params) params = {};
    this.navCtrl.setRoot(IniciarSesiNPage);
  }goToRegistro(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RegistroPage);
  }goToAplicacionCentroDeAcopio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AplicacionCentroDeAcopioPage);
  }goToHome(params){
      if (!params) params = {};
      this.navCtrl.setRoot(HomePage);  

  }
}
