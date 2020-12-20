import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoeComponent } from './shoe/shoe.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { shop013Diamond, shop015AddToCart } from '@nabz/shoes/shared/assets';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forChild([
      shop013Diamond,
      shop015AddToCart
    ]),
  ],
  declarations: [ShoeComponent],
  exports: [ShoeComponent]
})
export class ShoeModule {}
