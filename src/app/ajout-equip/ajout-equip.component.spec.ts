import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutEquipComponent } from './ajout-equip.component';

describe('AjoutEquipComponent', () => {
  let component: AjoutEquipComponent;
  let fixture: ComponentFixture<AjoutEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
