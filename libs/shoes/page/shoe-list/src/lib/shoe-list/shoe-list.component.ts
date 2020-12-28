import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ShoesService } from '@nabz/shoes/shared/services/shoes-service';
import { WishlistService } from '@nabz/shoes/shared/services/wishlist-service';
import { Shoe } from '@nabz/shoes/shared/types';
import { combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'nabz-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoeListComponent {
  shoes$ = this._shoesService.shoes$;
  wishlist$ = this._wishlistService.wishlist$;
  shoes: Shoe[];

  state$ = combineLatest([this.shoes$, this.wishlist$]).pipe(
    map(([shoes, wishlist]) => {
      shoes.forEach((shoe) => {
        if (wishlist.items.includes(shoe.id)) {
          shoe.inWishlist = true;
        } else {
          shoe.inWishlist = false;
        }
      });
      return shoes;
    }),
    map((shoes) => (this.shoes = shoes))
  );

  constructor(private _shoesService: ShoesService, private _wishlistService: WishlistService) {}
}
