import { Observable } from "rxjs";
import { IBaseResponse } from "./baseResponse.dto";
import { HttpService } from "../services/http.service";

export interface ISignUpRequest {
  loginId: string;
  password: string;
  checkedPassword: string;
  userName: string;
  email: string;
  nickname: string;
  studentNumber: number;
  major: string;
  birthday: string;
}

export interface ISignInRequest {
  loginId: string;
  password: string;
}

export interface ISignUpData {
  id: number;
  loginId: string;
  password: string;
  userName: string;
  email: string;
  nickname: string;
  studentNumber: number;
  major: string;
  birthday: string;
  createdAt: string;
  updatedAt: string;
}

export interface ISingInData {
  grantType: string;
  accessToken: string;
  refreshToken: string;
}

export interface ISignUpResponse extends IBaseResponse<ISignUpData> { }
export interface ISignInResponse extends IBaseResponse<ISingInData> { }


export interface IMembershipHttp {
  signUp(request: ISignUpRequest): Observable<ISignInResponse>;
  signIn(request: ISignInRequest): Observable<ISignInResponse>;
}

export class MembershipHttp implements IMembershipHttp {

  constructor(private readonly httpService: HttpService) { }

  public signUp(request: ISignUpRequest): Observable<ISignInResponse> {
    return this.httpService.Post(`/v1/users/register`, request);
  }

  public signIn(request: ISignInRequest): Observable<ISignInResponse> {
    return this.httpService.Post(`/v1/users/login`, request);
  }

}