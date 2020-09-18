import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
	private segmento : string="pessoa";
	private referencia : string="endereco-pessoa";
  constructor() {}

}
