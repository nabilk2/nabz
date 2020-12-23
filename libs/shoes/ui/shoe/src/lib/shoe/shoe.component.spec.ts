import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ShoeComponent } from './shoe.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { Gender, Shoe } from '@nabz/shoes/shared/types';


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
    fixture.detectChanges();
  });
  
  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have a shoe with name: Air Jordan', () => {
    component.shoe = shoe;
    expect(component.shoe.name).toContain('Jordan');
  });
});
