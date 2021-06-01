import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatSlotComponent } from './updat-slot.component';

describe('UpdatSlotComponent', () => {
  let component: UpdatSlotComponent;
  let fixture: ComponentFixture<UpdatSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
