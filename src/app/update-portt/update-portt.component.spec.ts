import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePorttComponent } from './update-portt.component';

describe('UpdatePorttComponent', () => {
  let component: UpdatePorttComponent;
  let fixture: ComponentFixture<UpdatePorttComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePorttComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePorttComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
