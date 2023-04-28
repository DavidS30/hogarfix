import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { UserDetailsComponent } from './main-page/user-details/user-details.component';


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
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
