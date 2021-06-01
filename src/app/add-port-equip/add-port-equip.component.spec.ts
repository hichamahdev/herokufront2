import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPortEquipComponent } from './add-port-equip.component';

describe('AddPortEquipComponent', () => {
  let component: AddPortEquipComponent;
  let fixture: ComponentFixture<AddPortEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPortEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPortEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
