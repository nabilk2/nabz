import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserServiceModule } from '@nabz/shoes/shared/services/user-service';

@NgModule({
  imports: [CommonModule, UserServiceModule],
})
export class CartServiceModule {}
