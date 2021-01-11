import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { CartService } from '@nabz/shoes/shared/services/cart-service';
import { ShoesService } from '@nabz/shoes/shared/services/shoes-service';
import { Shoe } from '@nabz/shoes/shared/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'nabz-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {
  @Input() shoeId: string;
  @Input() quantity: number;
  quantityControl: FormControl;
  shoe$: Observable<Shoe>;
  
  
  constructor(private _shoeService: ShoesService, private _cartService: CartService) {}
  
  ngOnInit(): void {
    this.shoe$ = this._shoeService.getShoe(this.shoeId);
    this.quantityControl = new FormControl(this.quantity);

    this.quantityControl.valueChanges.subscribe(value => {this._cartService.changeQuantity(this.shoe.id, value)});
  }

}
