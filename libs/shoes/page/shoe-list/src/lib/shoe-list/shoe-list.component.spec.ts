import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ShoesService } from '@nabz/shoes/shared/services/shoes-service';
import { Gender, Shoe } from '@nabz/shoes/shared/types';
import { of } from 'rxjs';

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
  const mockShoeService = {
    shoes$: jest.fn()
  };

  const shoes: Shoe[] = [{
    brand: 'Jordan',
    colorway: 'Blue',
    gender: Gender.MALE,
    id: '1',
    media: {
      imageUrl: 'imageUrl',
      thumbUrl: 'thumbUrl',
      smallImageUrl: 'smallImageUrl'
    },
    name: 'Air Jordan',
    releaseDate: '2020',
    retailPrice: 199,
    shoe: 'shoe',
    styleId: '1',
    title: 'Title',
    year: 2020
  }];

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

  // it('should have a list of shoes with only 1 shoe in it', done => {
  //   mockShoeService.shoes$.mockReturnValue(of(shoes));
    
  //   // component.shoes$.subscribe(shoes => {
  //   //   expect(shoes.length).toEqual(1);
  //   //   done();
  //   // })

  // });

});
