import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'nabz-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent {}
