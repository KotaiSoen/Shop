import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElectronicsComponent } from './PAGES/electronics/electronics.component';
import { FashionComponent } from './PAGES/fashion/fashion.component';
import { ToolsComponent } from './PAGES/tools/tools.component';
import { BooksComponent } from './PAGES/books/books.component';
import { HomeComponent } from './PAGES/home/home.component';
import { AboutUsComponent } from './PAGES/about-us/about-us.component';
import { ContactUsComponent } from './PAGES/contact-us/contact-us.component';
import { FoodstuffsComponent } from './PAGES/foodstuffs/foodstuffs.component';
import { CarsComponent } from './PAGES/cars/cars.component';
import { ToysComponent } from './PAGES/toys/toys.component';

const routes: Routes = [
  { path: '', redirectTo: 'home-component', pathMatch: 'full' },
  { path: 'home-component', component: HomeComponent},
  { path: 'electronics-component', component: ElectronicsComponent},
  { path: 'fashion-component', component: FashionComponent}, 
  { path: 'tools-component', component: ToolsComponent},
  { path: 'books-component', component: BooksComponent},
  { path: 'about-us-component', component: AboutUsComponent},
  { path: 'contact-us-component', component: ContactUsComponent},
  { path: 'foodstuffs-component', component: FoodstuffsComponent},
  { path: 'cars-component', component: CarsComponent},
  { path: 'toys-component', component: ToysComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
