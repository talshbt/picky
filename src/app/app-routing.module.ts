import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClothingComponent } from './clothing/clothing.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/clothing', pathMatch: 'full' },
    { path: 'clothing', component: ClothingComponent },

  { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
