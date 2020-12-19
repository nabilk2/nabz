import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule} from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {MatIconModule} from '@angular/material/icon';

import { ShoeService } from './services/shoe.service';
import { ShoesComponent } from './ui/shoes/shoes.component';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { shop013Diamond, shop015AddToCart } from './svg-icons';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { ShoesFilterComponent } from './ui/shoes-filter/shoes-filter.component';
import { ShoeComponent } from './ui/shoe/shoe.component';

const ROUTES: Route[] = [
  { path: '', component: ShoesComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    SvgIconsModule.forChild([
      shop013Diamond,
      shop015AddToCart
    ]),
    RouterModule.forChild(ROUTES),
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatAutocompleteModule
  ],
  providers: [
    ShoeService
  ],
  declarations: [
    ShoeComponent,
    ShoesComponent,
    ShoesFilterComponent
  ],
  exports: []
})
export class ShoesUIModule {}
