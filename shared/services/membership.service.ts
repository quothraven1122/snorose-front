import { Injectable } from "@angular/core";
import { ISingInData } from "../http/membership.http";

@Injectable({ providedIn: 'root' })
export class MembershipService {

  public initial: ISingInData = {
    grantType: '',
    accessToken: '',
    refreshToken: '',
  }

  public data: ISingInData = this.initial;

  constructor() {
    this.getUser();
  }

  public getUser() {
    const user = localStorage.getItem('user');
    if (user) {
      this.data = JSON.parse(user);
      return this.data;
    }
    return null;
  }

  public setUser(data: ISingInData) {
    this.data = data;
    localStorage.setItem('user', JSON.stringify(data));
  }

  public removeUser() {
    this.data = this.initial;
    localStorage.removeItem('user');
  }

  public isLogin() {
    if (this.data.accessToken === '') return false;
    return true;
  }

}