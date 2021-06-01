import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutequipanneauComponent } from './ajoutequipanneau.component';

describe('AjoutequipanneauComponent', () => {
  let component: AjoutequipanneauComponent;
  let fixture: ComponentFixture<AjoutequipanneauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutequipanneauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutequipanneauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
