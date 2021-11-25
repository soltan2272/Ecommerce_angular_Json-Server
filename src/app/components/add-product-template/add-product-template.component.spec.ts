import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductTemplateComponent } from './add-product-template.component';

describe('AddProductTemplateComponent', () => {
  let component: AddProductTemplateComponent;
  let fixture: ComponentFixture<AddProductTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProductTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProductTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
