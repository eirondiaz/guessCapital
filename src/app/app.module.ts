import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AmericaComponent } from './components/america/america.component';
import { EuropaComponent } from './components/europa/europa.component';
import { AsiaComponent } from './components/asia/asia.component';
import { AfricaComponent } from './components/africa/africa.component';
import { OceaniaComponent } from './components/oceania/oceania.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AmericaComponent,
    EuropaComponent,
    AsiaComponent,
    AfricaComponent,
    OceaniaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
