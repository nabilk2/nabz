import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoesService } from '@nabz/shoes/shared/services/shoes-service';
import { Shoe } from '@nabz/shoes/shared/types';

import { ShoeListComponent } from './shoe-list.component';

@Component({ selector: 'nabz-shoe', template: '' })
class ShoeStubComponent { 
  @Input() shoe: Shoe;
}

@Component({ selector: 'nabz-shoe-filter', template: '' })
class ShoeFilterComponent {}

describe('ShoeListComponent', () => {
  let component: ShoeListComponent;
  let fixture: ComponentFixture<ShoeListComponent>;
  const mockShoeService = jest.fn();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShoeListComponent, ShoeStubComponent, ShoeFilterComponent],
      providers: [
        { provide: ShoesService, useValue: mockShoeService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
