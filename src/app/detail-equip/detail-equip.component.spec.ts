import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEquipComponent } from './detail-equip.component';

describe('DetailEquipComponent', () => {
  let component: DetailEquipComponent;
  let fixture: ComponentFixture<DetailEquipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEquipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEquipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
