import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterSitterComponent } from './home/register/register-sitter/register-sitter.component';
import { RegisterBabyComponent } from './home/register/register-baby/register-baby.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './home/contact/contact.component';
import { RegisterComponent } from './home/register/register.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PortalComponent } from './portal/portal.component';
import {MatCardModule} from '@angular/material/card';
import { SitterListComponent } from './portal/sitter-list/sitter-list.component';
import {MatButtonModule} from '@angular/material/button';
import { AdminComponent } from './admin/admin.component';

import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';

import { rootReducer } from './store'; // Added this to get the root reducer


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterSitterComponent,
    RegisterBabyComponent,
    HomeComponent,
    ContactComponent,
    RegisterComponent,
    PageNotFoundComponent,
    PortalComponent,
    SitterListComponent,
    AdminComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    NgReduxModule, 
    NgReduxRouterModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
// Sets up redux in our application.
constructor(private ngRedux: NgRedux<IAppState>,
  private devTool: DevToolsExtension,
  private ngReduxRouter: NgReduxRouter,) {
 
  this.ngRedux.configureStore(
    rootReducer, {});

    ngReduxRouter.initialize(/* args */);   
}

 }
