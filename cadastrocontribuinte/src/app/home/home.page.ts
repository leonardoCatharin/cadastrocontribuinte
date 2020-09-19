import { Component } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

import { ModalenderecoPage } from '../modalendereco/modalendereco.page';
import { ModalcontatoPage } from '../modalcontato/modalcontato.page';
import { ModalbancoPage } from '../modalbanco/modalbanco.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	private segmento : string="pessoa";
	private referencia : string="endereco-pessoa";
  
  constructor(private modalCtrl: ModalController) {

  }

  async showModalEndereco(){
  	const modal = await this.modalCtrl.create({
      component: ModalenderecoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async showModalContato(){
    const modal = await this.modalCtrl.create({
      component: ModalcontatoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  async showModalBanco(){
    const modal = await this.modalCtrl.create({
      component: ModalbancoPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

}
