import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoeFilterComponent } from './shoe-filter.component';

describe('ShoeFilterComponent', () => {
  let component: ShoeFilterComponent;
  let fixture: ComponentFixture<ShoeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoeFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
