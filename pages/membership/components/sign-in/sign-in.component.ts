import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../../../../shared/services/global.service';
import { ISignInResponse } from '../../../../shared/http/membership.http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  public hide = true;

  public loginForm: FormGroup = this.formBuilder.group({
    loginId: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private globalService: GlobalService
  ) { }

  get id() {
    return this.loginForm.get('id');
  }

  get password() {
    return this.loginForm.get('password');
  }

  public onSignInClick() {
    if (!this.loginForm.valid) return;

    this.globalService.dalService.membershipHttp.signIn(this.loginForm.value).subscribe((response: ISignInResponse) => {
      if (response.isSuccess) {
        this.globalService.membershipService.setUser(response.result);
        this.router.navigateByUrl('/main');
      }
      else {
        this.globalService.httpService.snackBar('로그인 정보가 일치하지 않습니다. 다시 로그인 해주세요.');
      }
    });
  }

  public onSignUpClick() {
    this.router.navigateByUrl('/membership/signup');
  }

  public onResetPasswordClick() {
    // 비밀번호 초기화 페이지로 이동
  }
}
