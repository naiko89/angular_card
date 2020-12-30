import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListbaseskillsComponent } from './listbaseskills.component';

describe('ListbaseskillsComponent', () => {
  let component: ListbaseskillsComponent;
  let fixture: ComponentFixture<ListbaseskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListbaseskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListbaseskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
