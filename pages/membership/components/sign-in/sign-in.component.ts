import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  public hide = true;

  public loginForm: FormGroup = this.formBuilder.group({
    id: ['', Validators.required],
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

  public onSignIn() {
    // 로그인 버튼 클릭 시, 
    // - 로그인 성공 시 -> main 페이지로
    // - 로그인 실패 시 -> 실패 메세지 띄우기
    console.log('loginForm^^', this.loginForm.value);
  }

  public onSignUp() {
    // 회원가입 페이지로 이동

  }

  public onResetPassword() {
    // 비밀번호 초기화 페이지로 이동
  }
}
