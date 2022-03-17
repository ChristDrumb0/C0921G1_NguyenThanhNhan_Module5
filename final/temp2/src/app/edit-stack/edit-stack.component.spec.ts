import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStackComponent } from './edit-stack.component';

describe('EditStackComponent', () => {
  let component: EditStackComponent;
  let fixture: ComponentFixture<EditStackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
