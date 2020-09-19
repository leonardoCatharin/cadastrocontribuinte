import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalcontatoPage } from './modalcontato.page';

describe('ModalcontatoPage', () => {
  let component: ModalcontatoPage;
  let fixture: ComponentFixture<ModalcontatoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalcontatoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalcontatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
