import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurerSlotComponent } from './configurer-slot.component';

describe('ConfigurerSlotComponent', () => {
  let component: ConfigurerSlotComponent;
  let fixture: ComponentFixture<ConfigurerSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigurerSlotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurerSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
