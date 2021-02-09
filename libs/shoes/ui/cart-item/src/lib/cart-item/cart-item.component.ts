import { Component, ChangeDetectionStrategy, Input, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CartService } from '@nabz/shoes/shared/services/cart-service';
import { ShoesService } from '@nabz/shoes/shared/services/shoes-service';
import { Shoe } from '@nabz/shoes/shared/types';
import { Observable, Subscription } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  selector: 'nabz-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CartItemComponent implements OnInit, OnDestroy {
  @Input() shoeId: string;
  @Input() quantity: number;
  quantityControl: FormControl;
  shoe$: Observable<Shoe[]>;
  quantitySubscription: Subscription;

  constructor(private _shoeService: ShoesService, private _cartService: CartService) {}

  ngOnInit(): void {
    this.shoe$ = this._shoeService.getShoe(this.shoeId).pipe(pluck('results'));
    this.quantityControl = new FormControl(this.quantity);

    this.quantitySubscription = this.quantityControl.valueChanges.subscribe((value) =>
      this._cartService.changeQuantity(this.shoeId, value)
    );
  }

  moveToWishlist(shoeId): void {
    this._cartService.changeQuantity(shoeId, 0, true);
  }

  ngOnDestroy(): void {
    this.quantitySubscription.unsubscribe();
  }
}
