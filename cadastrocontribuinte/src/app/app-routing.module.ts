import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'modalendereco',
    loadChildren: () => import('./modalendereco/modalendereco.module').then( m => m.ModalenderecoPageModule)
  },  {
    path: 'contato',
    loadChildren: () => import('./contato/contato.module').then( m => m.ContatoPageModule)
  },
  {
    path: 'modalcontato',
    loadChildren: () => import('./modalcontato/modalcontato.module').then( m => m.ModalcontatoPageModule)
  },
  {
    path: 'modalbanco',
    loadChildren: () => import('./modalbanco/modalbanco.module').then( m => m.ModalbancoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
