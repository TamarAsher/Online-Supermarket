import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitsAndVegetablesComponent } from './fruits-and-vegetables.component';

describe('FruitsAndVegetablesComponent', () => {
  let component: FruitsAndVegetablesComponent;
  let fixture: ComponentFixture<FruitsAndVegetablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitsAndVegetablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitsAndVegetablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
