import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeatChickenFishComponent } from './meat-chicken-fish.component';

describe('MeatChickenFishComponent', () => {
  let component: MeatChickenFishComponent;
  let fixture: ComponentFixture<MeatChickenFishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeatChickenFishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeatChickenFishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
