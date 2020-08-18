import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksAndWineComponent } from './drinks-and-wine.component';

describe('DrinksAndWineComponent', () => {
  let component: DrinksAndWineComponent;
  let fixture: ComponentFixture<DrinksAndWineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksAndWineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksAndWineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
