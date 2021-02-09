import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '@nabz/shoes/shared/services/user-service';
import { WishlistService } from '@nabz/shoes/shared/services/wishlist-service';
import { Cart } from '@nabz/shoes/shared/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  #cartSubject = new BehaviorSubject<Cart>({ sessionId: null, shoes: {} });
  cart$ = this.#cartSubject.asObservable();
  has = Object.prototype.hasOwnProperty;

  constructor(private _userService: UserService, private _wishlistService: WishlistService) {
    if (localStorage.getItem('cart')) {
      const cart: Cart = JSON.parse(localStorage.getItem('cart'));
      this.#cartSubject.next(cart);
    }
  }

  storeCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.#cartSubject.value));
  }

  add(shoeId: string): void {
    let clonedShoes = { ...this.#cartSubject.value.shoes };

    const hasShoe = this.has.call(clonedShoes, shoeId);

    if (!hasShoe) {
      clonedShoes = { ...clonedShoes, [shoeId]: 1 };
    } else {
      clonedShoes[shoeId]++;
    }

    this.#cartSubject.next({
      sessionId: this._userService.getUUID(),
      shoes: clonedShoes,
    });

    this.storeCart();
  }

  changeQuantity(shoeId: string, quantity: number, toWishlist?: boolean): void {
    const { shoes } = this.#cartSubject.value;

    const foundShoeIndex = this.has.call(shoes, shoeId);

    if (foundShoeIndex) {
      if (quantity) {
        shoes[shoeId] = quantity;
        this.#cartSubject.next({ ...this.#cartSubject.value, shoes });
      }

      if (!quantity) {
        this.#cartSubject.next({ ...this.#cartSubject.value, shoes: this.removeShoe(shoeId, toWishlist) });
      }

      this.storeCart();
    }
  }

  removeShoe(shoeId: string, toWishlist?: boolean): { [shoeId: string]: number } {
    const { shoes } = this.#cartSubject.value;
    const { [shoeId]: quantity, ...restOfShoes } = shoes;

    if (toWishlist) {
      this._wishlistService.add(shoeId);
    }

    return restOfShoes;
  }
}
