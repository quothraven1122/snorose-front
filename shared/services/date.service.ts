import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  public getCurrentDateStr(): string {
    return new Date().toLocaleString();
  }

  public getCurrentDate() {
    return new Date();
  }

}