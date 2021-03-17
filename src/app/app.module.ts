import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabComponent } from './tab/tab.component';
import { TabItemComponent } from './tab-item/tab-item.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent,
    TabItemComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
