import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { ConnectComponent } from './connect/connect.component';
import {RestService} from './rest.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {CookieService} from 'ngx-cookie-service';
import { DisconnectComponent } from './disconnect/disconnect.component';
import {HttpClientModule} from '@angular/common/http';
import { ModalCreateComponent } from './modal-create/modal-create.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    ConnectComponent,
    DisconnectComponent,
    ModalCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule.forRoot(),
    FormsModule
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
