import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakeryAndBreadComponent } from './bakery-and-bread.component';

describe('BakeryAndBreadComponent', () => {
  let component: BakeryAndBreadComponent;
  let fixture: ComponentFixture<BakeryAndBreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakeryAndBreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakeryAndBreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
