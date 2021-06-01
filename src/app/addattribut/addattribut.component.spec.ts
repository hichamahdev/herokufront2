import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddattributComponent } from './addattribut.component';

describe('AddattributComponent', () => {
  let component: AddattributComponent;
  let fixture: ComponentFixture<AddattributComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddattributComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddattributComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
