import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: HomeComponent, pathMatch: 'full' }])],
  declarations: [HomeComponent],
})
export class HomeModule {}