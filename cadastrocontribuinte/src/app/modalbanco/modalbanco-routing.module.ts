import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalbancoPage } from './modalbanco.page';

const routes: Routes = [
  {
    path: '',
    component: ModalbancoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalbancoPageRoutingModule {}
