import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointBottomSheetComponent } from './point-bottom-sheet.component';

describe('PointBottomSheetComponent', () => {
  let component: PointBottomSheetComponent;
  let fixture: ComponentFixture<PointBottomSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PointBottomSheetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PointBottomSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
