import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MeucomponentComponent } from './meucomponent/meucomponent.component';
import { MeumoduleModule } from './meucomponent/meumodule/meumodule.module';

import { MaterializeModule } from 'angular2-materialize';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { HttpService } from './http.service';
import { EventsComponent } from './events/events.component';
import { EventSingleComponent } from './events/event-single/event-single.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { StorageService } from './storage.service';
import { MakeSubscriptionComponent } from './make-subscription/make-subscription.component';
import { ConfirmComponent } from './make-subscription/confirm/confirm.component';
import { PainelComponent } from './painel/painel.component';
import { UserEventsComponent } from './painel/user-events/user-events.component';
import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    MeucomponentComponent,
    EventsComponent,
    EventSingleComponent,
    SignupComponent,
    LoginComponent,
    MakeSubscriptionComponent,
    ConfirmComponent,
    PainelComponent,
    UserEventsComponent
  ],
  imports: [
    BrowserModule,
    MeumoduleModule,
    HttpModule,
    MaterializeModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [HttpService, StorageService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
