import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePortEquippComponent } from './update-port-equipp.component';

describe('UpdatePortEquippComponent', () => {
  let component: UpdatePortEquippComponent;
  let fixture: ComponentFixture<UpdatePortEquippComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePortEquippComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePortEquippComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
