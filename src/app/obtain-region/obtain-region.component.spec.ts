import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObtainRegionComponent } from './obtain-region.component';

describe('ObtainRegionComponent', () => {
  let component: ObtainRegionComponent;
  let fixture: ComponentFixture<ObtainRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObtainRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObtainRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
