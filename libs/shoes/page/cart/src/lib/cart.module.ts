import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartItemsModule } from '@nabz/shoes/ui/cart-items';
import { CartDetailModule } from '@nabz/shoes/ui/cart-detail';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CartComponent, pathMatch: 'full' }
    ]),
    CartItemsModule,
    CartDetailModule
  ],
  declarations: [
    CartComponent
  ]
})
export class CartModule {}
