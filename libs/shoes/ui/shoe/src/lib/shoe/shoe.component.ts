import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Shoe } from '@nabz/shoes/shared/types';

@Component({
  selector: 'nabz-shoe',
  templateUrl: './shoe.component.html',
  styleUrls: ['./shoe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShoeComponent implements OnInit {
  @Input() shoe: Shoe;
  
  constructor() { }

  ngOnInit(): void {
  }

}
