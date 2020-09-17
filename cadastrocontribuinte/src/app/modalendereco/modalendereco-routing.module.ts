import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalenderecoPage } from './modalendereco.page';

const routes: Routes = [
  {
    path: '',
    component: ModalenderecoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalenderecoPageRoutingModule {}
