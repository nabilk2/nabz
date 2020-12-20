import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ShoesService } from '@nabz/shoes/shared/services/shoes-service';

@Component({
  selector: 'nabz-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoeListComponent implements OnInit {
  shoes$ = this._shoesService.shoes$;

  constructor(private _shoesService: ShoesService) { }

  ngOnInit(): void {
  }

}
