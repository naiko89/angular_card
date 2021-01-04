import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueboxComponent } from './valuebox.component';

describe('ValueboxComponent', () => {
  let component: ValueboxComponent;
  let fixture: ComponentFixture<ValueboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
