import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ConnectComponent } from './connect/connect.component';
import {RestService} from './rest.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {CookieService} from 'ngx-cookie-service';
import { DisconnectComponent } from './disconnect/disconnect.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ConnectComponent,
    DisconnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    RestService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private restService: RestService, private cookieService: CookieService) {
    if (cookieService.get('phoneID') != null && cookieService.get('phoneID').length > 0 ) {
      restService.connected = true;
    }
  }

}
