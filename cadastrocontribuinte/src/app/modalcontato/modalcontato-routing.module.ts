import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalcontatoPage } from './modalcontato.page';

const routes: Routes = [
  {
    path: '',
    component: ModalcontatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalcontatoPageRoutingModule {}
