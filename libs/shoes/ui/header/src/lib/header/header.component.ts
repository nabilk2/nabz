import { Component, ChangeDetectionStrategy } from '@angular/core';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { CartService } from '@nabz/shoes/shared/services/cart-service';
import { WishlistService } from '@nabz/shoes/shared/services/wishlist-service';
import { Cart, Wishlist } from '@nabz/shoes/shared/types';

@Component({
  selector: 'nabz-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  cart: Cart;
  wishlist: Wishlist;

  state$ = combineLatest([this._wishlistService.wishlist$, this._cartService.cart$]).pipe(
    map(([wishlist, cart]) => ((this.wishlist = wishlist), (this.cart = cart)))
  );

  constructor(private _cartService: CartService, private _wishlistService: WishlistService) {}
}
