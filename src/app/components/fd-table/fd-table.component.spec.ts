import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FdTableComponent } from './fd-table.component';

describe('FdTableComponent', () => {
  let component: FdTableComponent;
  let fixture: ComponentFixture<FdTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FdTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FdTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
