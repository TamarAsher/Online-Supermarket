import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { FruitsAndVegetablesComponent } from './fruits-and-vegetables/fruits-and-vegetables.component'
import { DairyProductsAndEggsComponent } from './dairy-products-and-eggs/dairy-products-and-eggs.component'
import { BakeryAndBreadComponent } from './bakery-and-bread/bakery-and-bread.component'
import { MeatChickenFishComponent } from './meat-chicken-fish/meat-chicken-fish.component'
import { DrinksAndWineComponent } from './drinks-and-wine/drinks-and-wine.component'
import { AuthGuard } from './auth.guard';
import { SearchComponent } from './search/search.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = 
[
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '', 
    component: HomeComponent,
  },
  {
    path: 'categories',
    component: ProductsComponent,
    canActivate: [AuthGuard],
    children:[
      {
        path:'search/:str',
        component:SearchComponent,
        canActivate: [AuthGuard],
      },
      {
        path:'fruitsAndVagetables',
        component:FruitsAndVegetablesComponent,
        canActivate: [AuthGuard],
      },
      {
        path:'dairyProductsAndEggs',
        component:DairyProductsAndEggsComponent,
        canActivate: [AuthGuard],
      },
      {
        path:'bakeryAndBread',
        component:BakeryAndBreadComponent,
        canActivate: [AuthGuard],
      },
      {
        path:'meatChickenFish',
        component:MeatChickenFishComponent,
        canActivate: [AuthGuard],
      },
      {
        path:'drinksAndWine',
        component:DrinksAndWineComponent,
        canActivate: [AuthGuard], 
      }
    ]
  },
  {
    path: 'order', 
    component: OrderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
