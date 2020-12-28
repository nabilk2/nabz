import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CartService } from '@nabz/shoes/shared/services/cart-service';
import { WishlistService } from '@nabz/shoes/shared/services/wishlist-service';
import { Shoe } from '@nabz/shoes/shared/types';

@Component({
  selector: 'nabz-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoeComponent {
  @Input() shoe: Shoe;

  constructor(private _cartService: CartService, private _wishlistService: WishlistService) {}

  addToCart(): void {
    this._cartService.add(this.shoe.id);
  }

  addToWishlist(): void {
    this._wishlistService.add(this.shoe.id);
  }
}
