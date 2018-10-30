import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CentroDetallePage } from './centro-detalle';

@NgModule({
  declarations: [
    CentroDetallePage,
  ],
  imports: [
    IonicPageModule.forChild(CentroDetallePage),
  ],
})
export class CentroDetallePageModule {}
