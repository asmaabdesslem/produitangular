import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { HeaderComponent } from './pages/header/header.component';

import localeFr from '@angular/common/locales/fr';
import { FooterComponent } from './pages/footer/footer.component';
import { SideBarComponent } from './pages/side-bar/side-bar.component';
import { PageContentComponent } from './pages/page-content/page-content.component';
import { ReactiveFormsModule } from '@angular/forms';
registerLocaleData(localeFr);

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    PageContentComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
          provide: LOCALE_ID,
          useValue: 'fr' // 'de' for Germany, 'fr' for France ...
         }],
  bootstrap: [AppComponent]
})
export class AppModule { }
