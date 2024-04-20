import { Injectable } from '@angular/core';
import { ReviewHttp } from '../http/review.http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class DalService {

  public reviewHttp: ReviewHttp;

  constructor(private httpService: HttpService) {
    this.reviewHttp = new ReviewHttp(httpService);
  }

}
