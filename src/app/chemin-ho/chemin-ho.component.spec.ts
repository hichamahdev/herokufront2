import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheminHoComponent } from './chemin-ho.component';

describe('CheminHoComponent', () => {
  let component: CheminHoComponent;
  let fixture: ComponentFixture<CheminHoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheminHoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheminHoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
