import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouteranneauComponent } from './ajouteranneau.component';

describe('AjouteranneauComponent', () => {
  let component: AjouteranneauComponent;
  let fixture: ComponentFixture<AjouteranneauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouteranneauComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouteranneauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
