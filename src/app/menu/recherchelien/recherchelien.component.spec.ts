import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchelienComponent } from './recherchelien.component';

describe('RecherchelienComponent', () => {
  let component: RecherchelienComponent;
  let fixture: ComponentFixture<RecherchelienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecherchelienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchelienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
