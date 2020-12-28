import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '@nabz/shoes/shared/services/user-service';
import { Wishlist } from '@nabz/shoes/shared/types';

@Injectable({
  providedIn: 'root',
})
export class WishlistService {
  #wishlistSubject = new BehaviorSubject<Wishlist>({ sessionId: null, items: [] });
  wishlist$ = this.#wishlistSubject.asObservable();

  constructor(private _userService: UserService) {
    if (localStorage.getItem('wishlist')) {
      const wishlist: Wishlist = JSON.parse(localStorage.getItem('wishlist'));
      this.#wishlistSubject.next(wishlist);
    }
  }

  storeWishlist(): void {
    localStorage.setItem('wishlist', JSON.stringify(this.#wishlistSubject.value));
  }

  add(shoeId: string): void {
    const wishlist = [...this.#wishlistSubject.value.items];
    const shoeIndex = wishlist.indexOf(shoeId);

    if (shoeIndex > -1) {
      wishlist.splice(shoeIndex, 1);
    } else {
      wishlist.push(shoeId);
    }

    this.#wishlistSubject.next({ sessionId: this._userService.getUUID(), items: wishlist });
    this.storeWishlist();
  }

  isWishlistEmpty(): boolean {
    return this.#wishlistSubject.value.items.length === 0;
  }

  hasShoe(shoeId: string): boolean {
    return this.#wishlistSubject.value.items.includes(shoeId);
  }
}
