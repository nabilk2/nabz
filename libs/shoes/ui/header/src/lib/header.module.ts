import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { SvgIconsModule } from '@ngneat/svg-icon';
import {
  shop010Profile,
  shop014ShoppingCart,
  shop020Wishlist,
  shop025MagnifyingGlass,
  shop031DeliveryTruck,
} from '@nabz/shoes/shared/assets';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CartServiceModule } from '@nabz/shoes/shared/services/cart-service';
import { WishlistServiceModule } from '@nabz/shoes/shared/services/wishlist-service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SvgIconsModule.forChild([
      shop010Profile,
      shop014ShoppingCart,
      shop020Wishlist,
      shop025MagnifyingGlass,
      shop031DeliveryTruck,
    ]),
    CartServiceModule,
    WishlistServiceModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent],
})
export class HeaderModule {}
