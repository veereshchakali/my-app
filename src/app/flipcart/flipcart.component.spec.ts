import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipcartComponent } from './flipcart.component';

describe('FlipcartComponent', () => {
  let component: FlipcartComponent;
  let fixture: ComponentFixture<FlipcartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FlipcartComponent]
    });
    fixture = TestBed.createComponent(FlipcartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
