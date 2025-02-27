import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { GlobalService } from '../../../../shared/services/global.service';
import { ISignUpRequest, ISignUpResponse } from '../../../../shared/http/membership.http';
import { Router } from '@angular/router';
import { majorList } from '../../../../shared/data/major.data';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class SignUpComponent {

  public majorList = majorList;

  public firstFormGroup = this.formBuilder.group({
    userName: ['', Validators.required],
    loginId: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    checkedPassword: ['', Validators.required]
  });

  public secondFormGroup = this.formBuilder.group({
    nickname: ['', Validators.required],
    major: ['', Validators.required],
    studentNumber: [1111111, Validators.required],
    birthday: [new Date(), Validators.required],
  });


  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public globalService: GlobalService
  ) { }

  public onSignUpClick(event: any) {
    console.log('firstFormGroup', this.firstFormGroup.value, 'secondFormGroup', this.secondFormGroup.value);

    if (!this.firstFormGroup.valid) {
      this.globalService.httpService.snackBar('첫번째 양식에 입력하지 않은 필드가 있습니다. 모두 입력 후, 제출해 주세요');
      return;
    }
    if (!this.secondFormGroup.valid) {
      this.globalService.httpService.snackBar('두번째 양식에 입력하지 않은 필드가 있습니다. 모두 입력 후, 제출해 주세요');
      return;
    }

    const signUpData: ISignUpRequest = {
      loginId: this.firstFormGroup.value.loginId as string,
      password: this.firstFormGroup.value.password as string,
      checkedPassword: this.firstFormGroup.value.checkedPassword as string,
      userName: this.firstFormGroup.value.userName as string,
      email: this.firstFormGroup.value.email as string,
      nickname: this.secondFormGroup.value.nickname as string,
      studentNumber: this.secondFormGroup.value.studentNumber as number,
      major: this.secondFormGroup.value.major as string,
      birthday: this.globalService.dateService.getBirthdayString(this.secondFormGroup.value.birthday as Date)
    };

    console.log('signUpData', signUpData);

    this.globalService.dalService.membershipHttp.signUp(signUpData).subscribe((response: ISignUpResponse) => {
      console.log('response^^', response);
      if (response.isSuccess) {
        this.globalService.httpService.snackBar(`회원가입을 성공했습니다. 로그인 해주세요.`);
        this.router.navigateByUrl('/signIn');
      }
      else {
        console.log('회원가입 실패!');
        this.globalService.httpService.snackBar(`${response.message} 다시 회원가입 해주세요.`);
      }
    });

  }

}
