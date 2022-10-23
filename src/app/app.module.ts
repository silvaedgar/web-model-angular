import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './components/cards/cards.component';
import { DashboardComponent } from './layouts/dashboard/dashboard.component';
import { NavigationComponent } from './layouts/navigation/navigation.component';
import { NavbarStartComponent } from './layouts/navbar-start/navbar-start.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { RegisterComponent } from './pages/register/register.component';
import { WhoaimComponent } from './pages/whoaim/whoaim.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { CardHeaderComponent } from './shared/card-header/card-header.component';
import { NavbarAuthComponent } from './layouts/navbar-auth/navbar-auth.component';
import { Nivel1Component } from './components/nivel1/nivel1.component';
import { Nivel2Component } from './components/nivel2/nivel2.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    DashboardComponent,
    NavigationComponent,
    NavbarStartComponent,
    HomeComponent,
    LoginComponent,
    MainComponent,
    RegisterComponent,
    WhoaimComponent,
    SpinnerComponent,
    CardHeaderComponent,
    NavbarAuthComponent,
    Nivel1Component,
    Nivel2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    MatSnackBarModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
