import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListconnectionComponent } from './listconnection.component';

describe('ListconnectionComponent', () => {
  let component: ListconnectionComponent;
  let fixture: ComponentFixture<ListconnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListconnectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListconnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
