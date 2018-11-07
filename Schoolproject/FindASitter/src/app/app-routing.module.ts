import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './home/contact/contact.component';
import { RegisterComponent } from './home/register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterSitterComponent } from './home/register/register-sitter/register-sitter.component';
import { RegisterBabyComponent } from './home/register/register-baby/register-baby.component';
import { PortalComponent } from './portal/portal.component';

import { AuthGuard } from './auth/auth.guard';
import { SitterListComponent} from './portal/sitter-list/sitter-list.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [

{ path: '', redirectTo: 'home', pathMatch: 'full' },

{path: 'home', component: HomeComponent,children:
[
  {path: 'login', component: LoginComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'register', component: RegisterComponent,children:
  [
    {path:'registersitter', component: RegisterSitterComponent},
    {path:'registerbaby', component: RegisterBabyComponent}
  ]}, 
]
},

{path: 'portal', component:PortalComponent, canActivate: [AuthGuard], children:
[
  //{path: 'find-ababy', component: FindABabyComponent},
 // {path: 'find-asitter', component: FindASitterComponent}
 //{path: 'home', component: HomeComponent},
 {path: 'sitters-list', component: SitterListComponent}
]
},
{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
