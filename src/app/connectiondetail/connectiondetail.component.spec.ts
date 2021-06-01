import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectiondetailComponent } from './connectiondetail.component';

describe('ConnectiondetailComponent', () => {
  let component: ConnectiondetailComponent;
  let fixture: ComponentFixture<ConnectiondetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectiondetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
