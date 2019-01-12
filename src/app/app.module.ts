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
import { LoginComponent } from './Model/login/login.component';
import { WhatWeDoComponent } from './Model/what-we-do/what-we-do.component';
import { CrudComponent } from './Admin/crud/crud.component';
import { PostComponent } from './Admin/crud/post/post.component';
import { DeleteComponent } from './Admin/crud/delete/delete.component';
import { UpdateComponent } from './Admin/crud/update/update.component';
import { FormsModule } from '@angular/forms';
import { AdvertPanelComponent } from './Admin/advert-panel/advert-panel.component';
import { NewsPanelComponent } from './Admin/news-panel/news-panel.component';
import { PanelComponent } from './Admin/panel/panel.component';
import { RedirectComponent } from './Admin/redirect/redirect.component';





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
    LoginComponent,
    WhatWeDoComponent,
    CrudComponent,
    PostComponent,
    DeleteComponent,
    UpdateComponent,
    AdvertPanelComponent,
    NewsPanelComponent,
    PanelComponent,
    RedirectComponent,
 
   
   
    

  ],
  imports: [
    FormsModule,
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
