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

  public getBirthdayString(birthday: Date): string {
    const year = birthday.getFullYear();
    const month = (birthday.getMonth() + 1).toString().padStart(2, '0');
    const day = birthday.getDate().toString().padStart(2, '0');

    return `${year}-${month}-${day}`;
  }

}