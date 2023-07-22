import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VechicleDetailsComponent } from './vechicle-details.component';

describe('VechicleDetailsComponent', () => {
  let component: VechicleDetailsComponent;
  let fixture: ComponentFixture<VechicleDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VechicleDetailsComponent]
    });
    fixture = TestBed.createComponent(VechicleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
