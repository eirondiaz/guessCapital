import { OceaniaComponent } from './components/oceania/oceania.component';
import { AfricaComponent } from './components/africa/africa.component';
import { AsiaComponent } from './components/asia/asia.component';
import { EuropaComponent } from './components/europa/europa.component';
import { AmericaComponent } from './components/america/america.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'america',
    component: AmericaComponent
  },
  {
    path: 'europa',
    component: EuropaComponent
  },
  {
    path: 'asia',
    component: AsiaComponent
  },
  {
    path: 'africa',
    component: AfricaComponent
  },
  {
    path: 'oceania',
    component: OceaniaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
