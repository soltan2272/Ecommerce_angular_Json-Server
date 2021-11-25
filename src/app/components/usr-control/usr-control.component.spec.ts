import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsrControlComponent } from './usr-control.component';

describe('UsrControlComponent', () => {
  let component: UsrControlComponent;
  let fixture: ComponentFixture<UsrControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsrControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsrControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
