import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipcarteComponent } from './equipcarte.component';

describe('EquipcarteComponent', () => {
  let component: EquipcarteComponent;
  let fixture: ComponentFixture<EquipcarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipcarteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipcarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
