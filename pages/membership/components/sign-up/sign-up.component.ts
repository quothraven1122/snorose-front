import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class SignUpComponent {

  /**
   * 이름, 아이디, 이메일, 비밀번호, 비밀번호 확인
   * 닉네임, 전공, 학번, 생일
   * 학생증 사진
   */

  public firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    loginId: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  public secondFormGroup = this._formBuilder.group({
    nickname: ['', Validators.required],
    studentId: ['', Validators.required],
  });

  public thirdFormGroup = this._formBuilder.group({
    studentCard: ['', Validators.required],
  });


  constructor(private _formBuilder: FormBuilder) { }

}
