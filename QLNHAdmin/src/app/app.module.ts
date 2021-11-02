/**App component import */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ModelsComponent } from './models/models.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { RoleComponent } from './role/role.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**App component import *END* */

import {ButtonModule} from 'primeng/button';
import {MenubarModule} from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
/**PrimeNG import */
/**PrimeNG import *END**/


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModelsComponent,
    PageNotFoundComponent,
    RestaurantComponent,
    RoleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    InputTextModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
