import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoeListComponent } from './shoe-list/shoe-list.component';
import { ShoesServiceModule } from '@nabz/shoes/shared/services/shoes-service';
import { ShoeFilterModule } from '@nabz/shoes/ui/shoe-filter';
import { ShoeModule } from '@nabz/shoes/ui/shoe';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ShoeFilterModule,
    ShoeModule,
    ShoesServiceModule,
    RouterModule.forChild([
      { path: '', component: ShoeListComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [ShoeListComponent],
})
export class ShoeListModule {}
