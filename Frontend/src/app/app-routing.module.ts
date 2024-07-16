import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './menu-items/home-page/home-page.component'; 
import { ContactComponent } from './menu-items/contact/contact.component';
import { LoginComponent } from './menu-items/login/login.component';
import { CheckInComponent } from './menu-items/check-in/check-in.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'check-in', component: CheckInComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}