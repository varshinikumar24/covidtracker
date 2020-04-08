import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCountryCountComponent } from './list-country-count.component';

describe('ListCountryCountComponent', () => {
  let component: ListCountryCountComponent;
  let fixture: ComponentFixture<ListCountryCountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCountryCountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCountryCountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
