import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CartItemComponent } from './cart-item/cart-item.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, MatInputModule],
  declarations: [CartItemComponent],
  exports: [CartItemComponent]
})
export class CartItemModule {}
