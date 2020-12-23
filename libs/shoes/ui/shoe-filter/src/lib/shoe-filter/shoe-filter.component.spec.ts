import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShoeFilterComponent } from './shoe-filter.component';
import { HarnessLoader } from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { ShoesService } from '@nabz/shoes/shared/services/shoes-service';



describe('ShoeFilterComponent', () => {
  let component: ShoeFilterComponent;
  let fixture: ComponentFixture<ShoeFilterComponent>;
  let loader: HarnessLoader;
  const mockShoeService = jest.fn();


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        NoopAnimationsModule,
        MatSelectModule,
        MatInputModule,
        MatIconModule,
        MatAutocompleteModule,
      ],
      declarations: [ShoeFilterComponent],
      providers: [
        { provide: ShoesService, useValue: mockShoeService }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoeFilterComponent);
    component = fixture.componentInstance;
    loader = TestbedHarnessEnvironment.loader(fixture);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
