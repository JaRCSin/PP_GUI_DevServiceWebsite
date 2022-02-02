import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AiDevComponent } from './ai-dev/ai-dev.component';
import { AppComponent } from './app.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { JoinusComponent } from './joinus/joinus.component';
import { MainComponent } from './main/main.component';
import { MobileAppComponent } from './mobile-app/mobile-app.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { PersonalProjectComponent } from './personal-project/personal-project.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ServicesPageComponent } from './services-page/services-page.component';
import { ServicesComponent } from './services/services.component';
import { WebDevComponent } from './web-dev/web-dev.component';

const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      {path:'', component: MainComponent,
        children: [
          {path:'', component:HomeComponent, 
            children:[
              {path:'home', component: PageContainerComponent,
                children: [
                  {path:'', component: HeaderComponent},
                  {path:'', component: AboutusComponent},
                  {path:'', component: ServicesComponent},
                  {path:'', component: PortfolioComponent},
                  {path:'', component: ContactusComponent},
                  {path:'', component: JoinusComponent}
              ]
              },
              {path:'website-dev', component:WebDevComponent},
              {path:'mobile-app', component:MobileAppComponent},
              {path:'ai-dev', component:AiDevComponent},
              {path:'custom-project', component:PersonalProjectComponent},
              {path:'services-page', component:ServicesPageComponent}
        ]}
    ] }
]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
