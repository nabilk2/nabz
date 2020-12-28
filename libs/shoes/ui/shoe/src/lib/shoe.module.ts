import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoeComponent } from './shoe/shoe.component';
import { SvgIconsModule } from '@ngneat/svg-icon';
import { shop013Diamond, shop015AddToCart } from '@nabz/shoes/shared/assets';
import { UserServiceModule } from '@nabz/shoes/shared/services/user-service';
import { CartServiceModule } from '@nabz/shoes/shared/services/cart-service';
import { WishlistServiceModule } from '@nabz/shoes/shared/services/wishlist-service';

@NgModule({
  imports: [
    CommonModule,
    SvgIconsModule.forChild([shop013Diamond, shop015AddToCart]),
    UserServiceModule,
    CartServiceModule,
    WishlistServiceModule,
  ],
  declarations: [ShoeComponent],
  exports: [ShoeComponent],
})
export class ShoeModule {}
