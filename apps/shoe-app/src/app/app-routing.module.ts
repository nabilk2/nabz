import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const ROUTES: Route[] = [
  { path: '', loadChildren: () => import('@nabz/shoes/page/home').then((module) => module.HomeModule) },
  { path: 'shoes', loadChildren: () => import('@nabz/shoes/page/shoe-list').then((module) => module.ShoeListModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
