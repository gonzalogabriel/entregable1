import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MAPACENTROACOPIORINCONPage } from '../m-apacentroacopiorincon/m-apacentroacopiorincon';
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
import { MAPACENTROACOPIOLUISCARLOSGALANPage } from '../m-apacentroacopioluiscarlosgalan/m-apacentroacopioluiscarlosgalan';
import { MAPACENTROACOPI0QUIRIGUAPage } from '../m-apacentroacopi0quirigua/m-apacentroacopi0quirigua';

// Importar servicio api
import { ApiserviceProvider } from '../../providers/apiservice/apiservice';
import { normalizeLinks } from 'ionic-angular/umd/navigation/url-serializer';


@Component({
  selector: 'page-centros-de-acopio',
  templateUrl: 'centros-de-acopio.html'
})
export class CentrosDeAcopioPage {
  constructor(public navCtrl: NavController,
    public apiservice: ApiserviceProvider) {
    
  }

  centers: any[]=[];
 

  // Obtener Centros de Acopio
  ionViewDidLoad(){
    this.apiservice.getCenters().subscribe(
      data => {
        this.centers = data as any;
          console.log( 'API Respuesta: ' + this.centers.length + ' items.' );
        console.log(  this.centers);
        console.log( 'Esta es la variable data:');
        console.log( data);
      },
      error => {
        this.centers = [ { 'usuario': 'Admin', 'Error': error['message'] } ]
        console.log(error.message);
      }
    )
  }

/*   goToVerCentro(params){
    if (!params) params = {};
    this.navCtrl.push(VerCentroPage);
  }
 */

  goToMAPACENTROACOPIORINCON(params){
    if (!params) params = {};
    this.navCtrl.push(MAPACENTROACOPIORINCONPage);
  }goToRECYCLEAN(params){
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
  }goToMAPACENTROACOPIOLUISCARLOSGALAN(params){
    if (!params) params = {};
    this.navCtrl.push(MAPACENTROACOPIOLUISCARLOSGALANPage);
  }goToMAPACENTROACOPI0QUIRIGUA(params){
    if (!params) params = {};
    this.navCtrl.push(MAPACENTROACOPI0QUIRIGUAPage);
  }


}
