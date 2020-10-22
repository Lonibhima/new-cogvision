import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialInspectionComponent } from './industrial-inspection.component';

describe('IndustrialInspectionComponent', () => {
  let component: IndustrialInspectionComponent;
  let fixture: ComponentFixture<IndustrialInspectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndustrialInspectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
