import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatPortEquipComponent } from './updat-port-equip.component';

describe('UpdatPortEquipComponent', () => {
  let component: UpdatPortEquipComponent;
  let fixture: ComponentFixture<UpdatPortEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatPortEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatPortEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
