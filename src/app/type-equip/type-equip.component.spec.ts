import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEquipComponent } from './type-equip.component';

describe('TypeEquipComponent', () => {
  let component: TypeEquipComponent;
  let fixture: ComponentFixture<TypeEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
