import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ShoeService } from '../../services/shoe.service';
import { Brand, Gender } from '../../types/shoe-filters';

@Component({
  selector: 'nabz-shoes-filter',
  templateUrl: './shoes-filter.component.html',
  styleUrls: ['./shoes-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoesFilterComponent implements OnInit {
  filter$ = this.shoeService.filters$;
  form: FormGroup;
  genders: typeof Gender = Gender;
  brands: typeof Brand = Brand;

  years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  colors = [
    { hex: '#FF0033' , color: 'red' }
  ];

  constructor(
    private shoeService: ShoeService, 
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      gender: [null],
      brand: [null],
      name: [null],
      releaseYear: [null],
      color: [null]
    });
  }

  ngOnInit(): void {
    this.onFormValueChanges();
  }

  onFormValueChanges(): void {
    this.form.valueChanges.subscribe(filters => {
      console.log(filters);
      this.shoeService.onFilterChange(filters)
    });
  }

}
