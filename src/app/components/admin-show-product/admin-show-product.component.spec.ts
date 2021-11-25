import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminShowProductComponent } from './admin-show-product.component';

describe('AdminShowProductComponent', () => {
  let component: AdminShowProductComponent;
  let fixture: ComponentFixture<AdminShowProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminShowProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminShowProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
