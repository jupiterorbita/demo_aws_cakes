import { RateService } from './rate.service';
import { CakeService } from './cake.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ViewcakeComponent } from './viewcake/viewcake.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewcakeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CakeService, RateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
