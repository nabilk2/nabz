import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ShoeComponent } from './shoe.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { Gender, Shoe } from '@nabz/shoes/shared/types';
import { ChangeDetectionStrategy } from '@angular/core';


describe('ShoeComponent', () => {
  let component: ShoeComponent;
  let fixture: ComponentFixture<ShoeComponent>;
  const shoe: Shoe = {
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
  }
  
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        SvgIconsModule.forRoot()
      ],
      declarations: [ ShoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeComponent);
    component = fixture.componentInstance;
    component.shoe = shoe;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have a shoe with name: Air Jordan', () => {
    // component.shoe = shoe;
    expect(component.shoe.name).toEqual(shoe.name);
  });

  it('should have a shoe with an image equal to thumbUrl', () => {
    // component.shoe = shoe;
    fixture.detectChanges();

    const de = fixture.debugElement;
    const imageElement: HTMLInputElement = de.query(By.css('.shoe-card__image img')).nativeElement;

    const imageElementSrc = imageElement.src.split('localhost/');

    expect(imageElementSrc[1]).toEqual(shoe.media.thumbUrl);
  });
});
