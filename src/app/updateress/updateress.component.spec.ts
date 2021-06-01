import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateressComponent } from './updateress.component';

describe('UpdateressComponent', () => {
  let component: UpdateressComponent;
  let fixture: ComponentFixture<UpdateressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
