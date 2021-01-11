import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from '@nabz/shoes/shared/services/user-service';
import { Cart } from '@nabz/shoes/shared/types';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  #cartSubject = new BehaviorSubject<Cart>({ sessionId: null, shoes: new Map() });
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
    const clonedShoes = {...this.#cartSubject.value.shoes};

    const hasShoe = clonedShoes.has(shoeId);

    if (!hasShoe) {
      clonedShoes.set(shoeId, 1);
    } else {
      const shoe = clonedShoes.get(shoeId);
      clonedShoes.set(shoeId, shoe + 1);
    }

    this.#cartSubject.next({
      sessionId: this._userService.getUUID(),
      shoes: clonedShoes,
    });

    this.storeCart();
  }

  changeQuantity(shoeId: string, quantity: number): void {
    const { shoes } = this.#cartSubject.value;

    const foundShoeIndex = shoes.has(shoeId);
    
    if (foundShoeIndex) {
      shoes.set(shoeId, quantity);
      this.#cartSubject.next({...this.#cartSubject.value, shoes });
      this.storeCart();      
    }
  }
}
