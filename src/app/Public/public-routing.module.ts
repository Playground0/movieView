import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  {
    path:'',
    component: HomepageComponent
  },
  {
    path:'home',
    component: HomepageComponent
  },
  {
    path: 'aboutus',
    component: AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
