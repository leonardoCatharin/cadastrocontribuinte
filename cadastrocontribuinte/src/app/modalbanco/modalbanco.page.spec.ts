import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalbancoPage } from './modalbanco.page';

describe('ModalbancoPage', () => {
  let component: ModalbancoPage;
  let fixture: ComponentFixture<ModalbancoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalbancoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalbancoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
