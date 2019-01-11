import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { FooterComponent } from './Model/footer/footer.component';
import { CarouselComponent } from './Model/carousel/carousel.component';
import { HomeComponent } from './Model/home/home.component';
import { AboutUsComponent } from './Model/About/about-us/about-us.component';
import { OurExecutivesComponent } from './Model/About/our-executives/our-executives.component';
import { ServicesComponent } from './Model/services/services.component';
import { AngularFireModule } from '@angular/fire';

import { ContactComponent } from './Model/contact/contact.component';
import { environment } from 'src/environments/environment.prod';
import { AdvertComponent } from './Model/advert/advert.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    AboutUsComponent,
    OurExecutivesComponent,
    ServicesComponent,
    ContactComponent,
    AdvertComponent,
   
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AngularFireModule.initializeApp(environment.config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
