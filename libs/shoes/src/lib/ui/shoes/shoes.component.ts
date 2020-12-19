import { Component, OnInit } from '@angular/core';
import { ShoeService } from '../../services/shoe.service';

@Component({
  selector: 'nabz-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {
  shoes$ = this.shoeService.shoes$;

  constructor(private shoeService: ShoeService) { }

  ngOnInit(): void {}

}
