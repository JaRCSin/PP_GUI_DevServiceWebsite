import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import {NgParticlesModule} from "ng-particles";
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactusComponent } from './contactus/contactus.component';
import { JoinusComponent } from './joinus/joinus.component';
import { HeaderComponent } from './header/header.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { WebDevComponent } from './web-dev/web-dev.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { AiDevComponent } from './ai-dev/ai-dev.component';
import { PersonalProjectComponent } from './personal-project/personal-project.component';
import { ServicesPageComponent } from './services-page/services-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    PortfolioComponent,
    ContactusComponent,
    JoinusComponent,
    HeaderComponent,
    PageContainerComponent,
    WebDevComponent,
    MobileAppComponent,
    AiDevComponent,
    PersonalProjectComponent,
    ServicesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgParticlesModule, BrowserAnimationsModule,
    MatSidenavModule,MatButtonModule, MatIconModule, MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
