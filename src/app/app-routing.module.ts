import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { Nivel1Component } from './components/nivel1/nivel1.component';
import { Nivel2Component } from './components/nivel2/nivel2.component';
import { NavbarAuthComponent } from './layouts/navbar-auth/navbar-auth.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { WhoaimComponent } from './pages/whoaim/whoaim.component';
import { IsNotLoggedGuard } from './shared/guard/is-not-logged.guard';
import { RoleGuard } from './shared/guard/role.guard';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'whoaim', component:WhoaimComponent, canActivate: [IsNotLoggedGuard]},
  {path: 'register', component:RegisterComponent, canActivate: [IsNotLoggedGuard]},
  {path: 'login', component:LoginComponent, canActivate: [IsNotLoggedGuard]},
  {path: 'navbar-auth', component:NavbarAuthComponent, canActivate: [RoleGuard]},
  {path: 'cards', component: CardsComponent, canActivate: [RoleGuard] },
  {path: 'nivel1', component: Nivel1Component, canActivate: [RoleGuard]},
  {path: 'nivel2', component: Nivel2Component, canActivate: [RoleGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
