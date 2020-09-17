import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalenderecoPageRoutingModule } from './modalendereco-routing.module';

import { ModalenderecoPage } from './modalendereco.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalenderecoPageRoutingModule
  ],
  declarations: [ModalenderecoPage]
})
export class ModalenderecoPageModule {}
