import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterServiceeComponent } from './ajouter-servicee.component';

describe('AjouterServiceeComponent', () => {
  let component: AjouterServiceeComponent;
  let fixture: ComponentFixture<AjouterServiceeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterServiceeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjouterServiceeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
