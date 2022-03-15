import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { ShowInfoModule } from './show-info/show-info.module';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowInfoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
