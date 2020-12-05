import {NgModule} from '@angular/core';
import {AboutAsComponent} from './about-as/about-as.component';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';
import {DomainComponent} from './domain/domain.component';
import {TestComponent} from './test/test.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {DomainDetailComponent} from './domain-detail/domain-detail.component';

const routes: Routes = [
  {path: '', redirectTo: '/aboutUs', pathMatch: 'full'},
  {path: 'aboutUs', component: AboutAsComponent},
  {path: 'domain', component: DomainComponent},
  {path: 'domain/detail/:id', component: DomainDetailComponent},
  {path: 'domain/detail/:id/test/:id', component: TestComponent},
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
