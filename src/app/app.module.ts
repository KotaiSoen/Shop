import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './COMPONENTS/header/header.component';
import { ElectronicsComponent } from './PAGES/electronics/electronics.component';
import { FashionComponent } from './PAGES/fashion/fashion.component';
import { ToolsComponent } from './PAGES/tools/tools.component';
import { BooksComponent } from './PAGES/books/books.component';
import { HomeComponent } from './PAGES/home/home.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { AboutUsComponent } from './PAGES/about-us/about-us.component';
import { ContactUsComponent } from './PAGES/contact-us/contact-us.component';
import { CarsComponent } from './PAGES/cars/cars.component';
import { FoodstuffsComponent } from './PAGES/foodstuffs/foodstuffs.component';
import { ToysComponent } from './PAGES/toys/toys.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ElectronicsComponent,
    FashionComponent,
    ToolsComponent,
    BooksComponent,
    HomeComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    CarsComponent,
    FoodstuffsComponent,
    ToysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    FontAwesomeModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
