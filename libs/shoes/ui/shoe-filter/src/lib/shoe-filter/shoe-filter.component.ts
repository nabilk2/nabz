import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Gender, Brand } from '@nabz/shoes/shared/types';
import { ShoesService } from '@nabz/shoes/shared/services/shoes-service';

@Component({
  selector: 'nabz-shoe-filter',
  templateUrl: './shoe-filter.component.html',
  styleUrls: ['./shoe-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoeFilterComponent implements OnInit {

  filter$ = this._shoeService.filters$;
  form: FormGroup;
  genders: typeof Gender = Gender;
  brands: typeof Brand = Brand;

  years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020];
  colors = [
    { hex: '#FF0033' , color: 'red' }
  ];

  constructor(
    private _shoeService: ShoesService, 
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
      this._shoeService.onFilterChange(filters);
    });
  }

}
