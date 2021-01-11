import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CartService } from '@nabz/shoes/shared/services/cart-service';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'nabz-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemsComponent {

  shoes$ = this._cartService.cart$.pipe(
    pluck('shoes'),
  );

  constructor(
    private _cartService: CartService
  ) {}
}
