import { NgModule } from "@angular/core";
import { Route, RouterModule } from '@angular/router'
import { AppComponent } from './app.component';


const ROUTES: Route[] = [
    { path: '', component: AppComponent, pathMatch: 'full' },
    { path: 'shoes', loadChildren: () => import('@nabz/shoes').then(module => module.ShoesUIModule) }
];


@NgModule({
    imports: [RouterModule.forRoot(ROUTES)],
    exports: [RouterModule]
})
export class AppRoutingModule {}