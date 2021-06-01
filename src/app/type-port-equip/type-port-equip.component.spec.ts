import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePortEquipComponent } from './type-port-equip.component';

describe('TypePortEquipComponent', () => {
  let component: TypePortEquipComponent;
  let fixture: ComponentFixture<TypePortEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypePortEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePortEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
