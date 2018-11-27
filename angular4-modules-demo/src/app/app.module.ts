import { SharedModule } from './shared/SharedModule';
import { ModuleAComponent } from './module-a/module-a.component';
import { ModuleAModule } from './module-a/module-a.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './core/pages/main-page/main-page.component';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule,
    SharedModule.forRoot()
  ],
  providers: [ ],
  entryComponents:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
