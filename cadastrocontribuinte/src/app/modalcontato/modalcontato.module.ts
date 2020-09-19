import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalcontatoPageRoutingModule } from './modalcontato-routing.module';

import { ModalcontatoPage } from './modalcontato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalcontatoPageRoutingModule
  ],
  declarations: [ModalcontatoPage]
})
export class ModalcontatoPageModule {}
