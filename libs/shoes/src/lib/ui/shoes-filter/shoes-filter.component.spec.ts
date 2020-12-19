import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoesFilterComponent } from './shoes-filter.component';

describe('ShoesFilterComponent', () => {
  let component: ShoesFilterComponent;
  let fixture: ComponentFixture<ShoesFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoesFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoesFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
