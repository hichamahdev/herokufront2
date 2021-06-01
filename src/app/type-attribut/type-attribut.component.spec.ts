import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeAttributComponent } from './type-attribut.component';

describe('TypeAttributComponent', () => {
  let component: TypeAttributComponent;
  let fixture: ComponentFixture<TypeAttributComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeAttributComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeAttributComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
