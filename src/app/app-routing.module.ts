import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { UserDetailsComponent } from './main-page/user-details/user-details.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'contact', 
    loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
  },
  { path: 'home',
    component: MainPageComponent
  },
  {
    path: 'user/:id',
    component: UserDetailsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
