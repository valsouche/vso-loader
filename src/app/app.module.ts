import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VsoLoaderModule } from './modules/loader/loader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VsoLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
