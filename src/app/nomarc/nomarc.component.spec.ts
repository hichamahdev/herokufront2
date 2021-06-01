import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomarcComponent } from './nomarc.component';

describe('NomarcComponent', () => {
  let component: NomarcComponent;
  let fixture: ComponentFixture<NomarcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomarcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomarcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
