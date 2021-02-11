import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartDetailComponent } from './cart-detail/cart-detail.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CartDetailComponent],
  exports: [CartDetailComponent]
})
export class CartDetailModule {}
