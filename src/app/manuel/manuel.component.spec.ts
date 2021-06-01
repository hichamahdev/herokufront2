import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManuelComponent } from './manuel.component';

describe('ManuelComponent', () => {
  let component: ManuelComponent;
  let fixture: ComponentFixture<ManuelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManuelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
