import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DairyProductsAndEggsComponent } from './dairy-products-and-eggs.component';

describe('DairyProductsAndEggsComponent', () => {
  let component: DairyProductsAndEggsComponent;
  let fixture: ComponentFixture<DairyProductsAndEggsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DairyProductsAndEggsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DairyProductsAndEggsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
