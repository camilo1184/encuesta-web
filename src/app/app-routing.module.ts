import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PollComponent } from './poll/poll.component';
import { ResponseComponent } from './response/response.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';
import { RequestGuardService } from './service/RequestGuardService';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [RequestGuardService]
  },
  {
    path: 'poll',
    component: PollComponent,
    canActivate: [RequestGuardService]
  },
  {
    path: 'response', 
    component: ResponseComponent,
    canActivate: [RequestGuardService]
  },
  {
    path: 'notAuthorized', 
    component: NotAuthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
