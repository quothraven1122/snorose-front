import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {

  public firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });

  public secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  public isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }

}
