import { Injectable } from '@angular/core';
import { ReviewHttp } from '../http/review.http';
import { HttpService } from './http.service';
import { MembershipHttp } from '../http/membership.http';

@Injectable({
  providedIn: 'root'
})
export class DalService {

  public reviewHttp: ReviewHttp;
  public membershipHttp: MembershipHttp;

  constructor(private httpService: HttpService) {
    this.reviewHttp = new ReviewHttp(httpService);
    this.membershipHttp = new MembershipHttp(httpService);
  }

}
