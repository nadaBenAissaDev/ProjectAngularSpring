import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import {DomainComponent} from './domain/domain.component';
import {TestComponent} from './test/test.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DomainDetailComponent} from './domain-detail/domain-detail.component';
import {SubscribeComponent} from './subscribe/subscribe.component';
import {AboutUSComponent} from './about-us/about-us.component';
import {ContactUsComponent} from './contact-us/contact-us.component';

const routes: Routes = [
  {path: '', redirectTo: '/aboutUs', pathMatch: 'full'},
  {path: 'aboutUs', component: AboutUSComponent},
  {path: 'domain', component: DomainComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'domain/:id', component: DomainComponent},
  {path: 'domain/:id/test/:id', component: TestComponent},
  {path: 'domain/:id/detail/:id', component: DomainDetailComponent},
  {path: 'domain/detail/:id', component: DomainDetailComponent},
  {path: 'domain/detail/:id/subscribe/:id', component: SubscribeComponent},
  {path: 'domain/detail/:id/test/:id', component: TestComponent},
  {path: 'domain/:id/detail/:id/test/:id', component: TestComponent},
  {path: 'domain/test/:id', component: TestComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {
}
