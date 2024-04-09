import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SharedModule } from '../../shared/shared.module';
import { MembershipRoutingModule } from './membership-routing.module';



@NgModule({
  declarations: [
    MembershipComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    MembershipRoutingModule,
    SharedModule
  ]
})
export class MembershipModule { }
