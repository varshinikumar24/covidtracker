import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtainInputComponent } from './obtain-input.component';

describe('ObtainInputComponent', () => {
  let component: ObtainInputComponent;
  let fixture: ComponentFixture<ObtainInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtainInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtainInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
