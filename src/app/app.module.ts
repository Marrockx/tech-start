import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSuccessPageComponent } from './form-success-page/form-success-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FomanticUIModule } from 'ngx-fomantic-ui';

import { MyserviceService } from './myservice.service';
import { FormPageComponent } from './form-page/form-page.component';
import { NgToastModule } from 'ng-angular-popup';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatIcon } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    FormSuccessPageComponent,
    FormPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FomanticUIModule,
    AppRoutingModule,
    NgToastModule,
    NoopAnimationsModule,
    MatIconModule,
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
