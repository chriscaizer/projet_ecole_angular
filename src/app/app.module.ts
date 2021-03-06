import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SiteToolbarComponent } from './site-toolbar/site-toolbar.component';
import { SiteGeneralInformationsComponent } from './site-general-informations/site-general-informations.component';
import { ShadowSectionBackgroundComponent } from './shadow-section-background/shadow-section-background.component';
import { ClickableCardComponent } from './clickable-card/clickable-card.component';
import { NewsContainerComponent } from './news-container/news-container.component';
import { NewsComponent } from './news/news.component';
import { WordpressService } from './services/wordpress.service';
import { MainPageComponent } from './main-page/main-page.component';
import { MaterPageComponent } from './mater-page/mater-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ClassCardComponent } from './mater-page/class-card/class-card.component';


@NgModule({
  declarations: [
    AppComponent,
    SiteToolbarComponent,
    SiteGeneralInformationsComponent,
    ShadowSectionBackgroundComponent,
    ClickableCardComponent,
    NewsContainerComponent,
    NewsComponent,
    MainPageComponent,
    MaterPageComponent,
    ClassCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    WordpressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
