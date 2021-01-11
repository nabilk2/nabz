import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { CartItemsModule } from '@nabz/shoes/ui/cart-items';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CartComponent, pathMatch: 'full' }
    ]),
    CartItemsModule
  ],
  declarations: [
    CartComponent
  ]
})
export class CartModule {}
