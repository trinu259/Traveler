import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { BusModule } from './Bus/bus.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [BrowserModule,BusModule,RouterModule ],

  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
