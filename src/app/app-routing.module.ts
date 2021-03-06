import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Model/home/home.component';
import { AboutUsComponent } from './Model/About/about-us/about-us.component';
import { OurExecutivesComponent } from './Model/About/our-executives/our-executives.component';
import { ServicesComponent } from './Model/services/services.component';
import { ContactComponent } from './Model/contact/contact.component';
import { AdvertComponent } from './Model/advert/advert.component';
import { LoginComponent } from './Model/login/login.component';
import { WhatWeDoComponent } from './Model/what-we-do/what-we-do.component';
import{PanelComponent} from './Admin/panel/panel.component';
import{RedirectComponent} from './Admin/redirect/redirect.component'
const routes: Routes = [

{path:'',component:HomeComponent}
,{path:'about-us',component:AboutUsComponent},
{path:'our-executives',component:OurExecutivesComponent},
{path:'app-services', component:ServicesComponent},
{path:'app-contact', component:ContactComponent},
{path:'app-advert',component:AdvertComponent},
{path:'app-admin-login',component:LoginComponent},
{path:'what-we-do',component:WhatWeDoComponent},
{path:'panel',component:PanelComponent}
,{path:'redirect',component:RedirectComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
