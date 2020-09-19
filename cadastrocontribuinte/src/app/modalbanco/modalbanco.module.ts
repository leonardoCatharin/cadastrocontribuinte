import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalbancoPageRoutingModule } from './modalbanco-routing.module';

import { ModalbancoPage } from './modalbanco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalbancoPageRoutingModule
  ],
  declarations: [ModalbancoPage]
})
export class ModalbancoPageModule {}
