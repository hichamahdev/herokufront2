import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutersecondequipComponent } from './ajoutersecondequip.component';

describe('AjoutersecondequipComponent', () => {
  let component: AjoutersecondequipComponent;
  let fixture: ComponentFixture<AjoutersecondequipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutersecondequipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutersecondequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
