import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePortComponent } from './type-port.component';

describe('TypePortComponent', () => {
  let component: TypePortComponent;
  let fixture: ComponentFixture<TypePortComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypePortComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypePortComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
