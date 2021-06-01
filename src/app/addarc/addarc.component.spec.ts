import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddarcComponent } from './addarc.component';

describe('AddarcComponent', () => {
  let component: AddarcComponent;
  let fixture: ComponentFixture<AddarcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddarcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
