import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtainCurrencyComponent } from './obtain-currency.component';

describe('ObtainCurrencyComponent', () => {
  let component: ObtainCurrencyComponent;
  let fixture: ComponentFixture<ObtainCurrencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtainCurrencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtainCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
