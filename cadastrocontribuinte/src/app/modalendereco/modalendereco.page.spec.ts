import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalenderecoPage } from './modalendereco.page';

describe('ModalenderecoPage', () => {
  let component: ModalenderecoPage;
  let fixture: ComponentFixture<ModalenderecoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalenderecoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalenderecoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
