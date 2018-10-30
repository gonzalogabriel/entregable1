import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { RECYCLEANPage } from '../pages/r-ecyclean/r-ecyclean';
import { SolicitarRecoleccionPage } from '../pages/solicitar-recoleccion/solicitar-recoleccion';
import { ReciclarPage } from '../pages/reciclar/reciclar';
import { CMoReciclarPage } from '../pages/c-mo-reciclar/c-mo-reciclar';
import { CENTROACOPIOLUISCARLOSGALANPage } from '../pages/c-entroacopioluiscarlosgalan/c-entroacopioluiscarlosgalan';
import { MAPACENTROACOPIOLUISCARLOSGALANPage } from '../pages/m-apacentroacopioluiscarlosgalan/m-apacentroacopioluiscarlosgalan';
import { CENTROACOPI0QUIRIGUAPage } from '../pages/c-entroacopi0quirigua/c-entroacopi0quirigua';
import { CENTROACOPI0RINCONPage } from '../pages/c-entroacopi0rincon/c-entroacopi0rincon';
import { MAPACENTROACOPI0QUIRIGUAPage } from '../pages/m-apacentroacopi0quirigua/m-apacentroacopi0quirigua';
import { MAPACENTROACOPIORINCONPage } from '../pages/m-apacentroacopiorincon/m-apacentroacopiorincon';
import { CENTROACOPIORINCONPage } from '../pages/c-entroacopiorincon/c-entroacopiorincon';
import { ProgresoPage } from '../pages/progreso/progreso';
import { VidrioPage } from '../pages/vidrio/vidrio';
import { CentrosDeAcopioPage } from '../pages/centros-de-acopio/centros-de-acopio';
import { PapelYCartonPage } from '../pages/papel-ycarton/papel-ycarton';
import { MetalPage } from '../pages/metal/metal';
import { OtrosPage } from '../pages/otros/otros';
import { PlasticoPage } from '../pages/plastico/plastico';
import { RegistroPage } from '../pages/registro/registro';
import { HomePage } from '../pages/home/home';
import { IniciarSesiNPage } from '../pages/iniciar-sesi-n/iniciar-sesi-n';
import { VOUCHERPage } from '../pages/v-oucher/v-oucher';
import { FELICITACIONESPORRECICLARPage } from '../pages/f-elicitacionesporreciclar/f-elicitacionesporreciclar';
import { AplicacionCentroDeAcopioPage } from '../pages/aplicacion-centro-de-acopio/aplicacion-centro-de-acopio';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GoogleMaps } from "@ionic-native/google-maps";
import { CentroDetallePage } from '../pages/centro-detalle/centro-detalle';

// Import for service/provider
import { HttpClientModule } from '@angular/common/http';
import { ApiserviceProvider } from '../providers/apiservice/apiservice';



@NgModule({
  declarations: [
    MyApp,
    RECYCLEANPage,
    SolicitarRecoleccionPage,
    ReciclarPage,
    CMoReciclarPage,
    HomePage,
    CENTROACOPIOLUISCARLOSGALANPage,
    MAPACENTROACOPIOLUISCARLOSGALANPage,
    CENTROACOPI0QUIRIGUAPage,
    CENTROACOPI0RINCONPage,
    MAPACENTROACOPI0QUIRIGUAPage,
    MAPACENTROACOPIORINCONPage,
    CENTROACOPIORINCONPage,
    ProgresoPage,
    VidrioPage,
    CentrosDeAcopioPage,
    PapelYCartonPage,
    MetalPage,
    OtrosPage,
    PlasticoPage,
    RegistroPage,
    IniciarSesiNPage,
    VOUCHERPage,
    FELICITACIONESPORRECICLARPage,
    AplicacionCentroDeAcopioPage,
    CentroDetallePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RECYCLEANPage,
    SolicitarRecoleccionPage,
    ReciclarPage,
    CMoReciclarPage,
    HomePage,
    CENTROACOPIOLUISCARLOSGALANPage,
    MAPACENTROACOPIOLUISCARLOSGALANPage,
    CENTROACOPI0QUIRIGUAPage,
    CENTROACOPI0RINCONPage,
    MAPACENTROACOPI0QUIRIGUAPage,
    MAPACENTROACOPIORINCONPage,
    CENTROACOPIORINCONPage,
    ProgresoPage,
    VidrioPage,
    CentrosDeAcopioPage,
    PapelYCartonPage,
    MetalPage,
    OtrosPage,
    PlasticoPage,
    RegistroPage,
    IniciarSesiNPage,
    VOUCHERPage,
    FELICITACIONESPORRECICLARPage,
    AplicacionCentroDeAcopioPage,
    CentroDetallePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiserviceProvider,
    ApiserviceProvider
  ]
})
export class AppModule {}