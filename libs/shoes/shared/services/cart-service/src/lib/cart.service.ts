import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '@nabz/shoes/shared/services/user-service';
import { Cart } from '@nabz/shoes/shared/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  #cartSubject = new BehaviorSubject<Cart>({ sessionId: null, shoes: [] });
  cart$ = this.#cartSubject.asObservable();

  constructor(private _userService: UserService) {
    if (localStorage.getItem('cart')) {
      const cart: Cart = JSON.parse(localStorage.getItem('cart'));
      this.#cartSubject.next(cart);
    }
  }

  storeCart(): void {
    localStorage.setItem('cart', JSON.stringify(this.#cartSubject.value));
  }

  add(shoeId: string): void {
    const { shoes } = this.#cartSubject.value;
    const clonedShoes = [...shoes];

    const foundShoeIndex = shoes.findIndex((shoeItem) => shoeItem.shoeId === shoeId);

    if (foundShoeIndex === -1) {
      clonedShoes.push({ shoeId, quantity: 1 });
    } else {
      clonedShoes[foundShoeIndex].quantity++;
    }

    this.#cartSubject.next({
      sessionId: this._userService.getUUID(),
      shoes: clonedShoes,
    });

    this.storeCart();
  }
}
