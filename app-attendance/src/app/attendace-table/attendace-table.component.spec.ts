import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendaceTableComponent } from './attendace-table.component';

describe('AttendaceTableComponent', () => {
  let component: AttendaceTableComponent;
  let fixture: ComponentFixture<AttendaceTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttendaceTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttendaceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
