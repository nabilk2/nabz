import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';

import { ShoeFilterComponent } from './shoe-filter/shoe-filter.component';
import { ShoesServiceModule } from '@nabz/shoes/shared/services/shoes-service';

@NgModule({
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule,
    ShoesServiceModule
  ],
  declarations: [ShoeFilterComponent],
  exports: [
    ShoeFilterComponent
  ]
})
export class ShoeFilterModule { }
