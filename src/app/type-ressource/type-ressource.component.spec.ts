import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeRessourceComponent } from './type-ressource.component';

describe('TypeRessourceComponent', () => {
  let component: TypeRessourceComponent;
  let fixture: ComponentFixture<TypeRessourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeRessourceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeRessourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
