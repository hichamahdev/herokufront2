import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addportequip2Component } from './addportequip2.component';

describe('Addportequip2Component', () => {
  let component: Addportequip2Component;
  let fixture: ComponentFixture<Addportequip2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Addportequip2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Addportequip2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
