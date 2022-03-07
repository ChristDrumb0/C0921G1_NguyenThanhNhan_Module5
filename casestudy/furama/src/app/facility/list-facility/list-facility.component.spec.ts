import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFacilityComponent } from './list-facility.component';

describe('ListComponent', () => {
  let component: ListFacilityComponent;
  let fixture: ComponentFixture<ListFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create-employee', () => {
    expect(component).toBeTruthy();
  });
});
