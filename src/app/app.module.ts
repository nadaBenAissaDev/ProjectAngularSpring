import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DomainComponent } from './domain/domain.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TestComponent } from './test/test.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DomainDetailComponent } from './domain-detail/domain-detail.component';
import { SousDomainComponent } from './sous-domain/sous-domain.component';
import { CommentComponent } from './comment/comment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CountdownModule } from 'ngx-countdown';
import { AboutUSComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    DomainComponent,
    ContactUsComponent,
    TestComponent,
    NotFoundComponent,
    DomainDetailComponent,
    SousDomainComponent,
    CommentComponent,
    SubscribeComponent,
    SignInComponent,
    AboutUSComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    CountdownModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
