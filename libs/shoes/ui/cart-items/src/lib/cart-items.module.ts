import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartItemModule } from '@nabz/shoes/ui/cart-item';

@NgModule({
  imports: [CommonModule, CartItemModule],
  declarations: [CartItemsComponent],
  exports: [CartItemsComponent]
})
export class CartItemsModule {}
