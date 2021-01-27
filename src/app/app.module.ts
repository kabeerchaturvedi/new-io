import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router, RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { LangComponent } from './pages/lang/lang.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';

const AppRoutes:Routes=[
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
  {path:"lang",component:LangComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"contactme",component:ContactComponent}
]
@NgModule({


 
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LangComponent,
    ProjectsComponent,
    ContactComponent,
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
