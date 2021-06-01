import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatEquipComponent } from './updat-equip.component';

describe('UpdatEquipComponent', () => {
  let component: UpdatEquipComponent;
  let fixture: ComponentFixture<UpdatEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
