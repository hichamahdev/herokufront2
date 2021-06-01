import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatattributComponent } from './updatattribut.component';

describe('UpdatattributComponent', () => {
  let component: UpdatattributComponent;
  let fixture: ComponentFixture<UpdatattributComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatattributComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatattributComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
