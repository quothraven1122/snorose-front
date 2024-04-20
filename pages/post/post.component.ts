import { Component } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * 제목, 내용, 작성자
 * 
 * - 강의 정보
 * 강의 이름, 강의 교수님, 년도, 학기, 중간/기말 여부, 강의 타입, pf 여부
 * 
 * - 족보 정보
 * 파일 path, 파일 이름
 */

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {

  public fileName: string = '';

  public reviewForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', Validators.required]
  });
  public lectureForm: FormGroup = this.formBuilder.group({
    lectureName: ['', Validators.required],
    professor: ['', Validators.required],
    lectureYear: ['', Validators.required],
    semester: ['', Validators.required],
    lectureType: ['', Validators.required],
    hadMidterm: ['', Validators.required],
    isPF: ['', Validators.required],
    file: ['', Validators.required]
  })



  constructor(
    private formBuilder: FormBuilder,
    public globalService: GlobalService
  ) { }

  public onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file.type !== 'application/pdf') {
      this.globalService.httpService.snackBar('파일은 pdf만 업로드 가능합니다.');
      return;
    }

    if (file) {
      this.fileName = file.name;
    }
  }

  public onClickSubmit(event: any) {
    console.log('button click');
    if (this.reviewForm.valid && this.lectureForm.valid) {
      // 제출
      console.log('review', this.reviewForm.value);
      console.log('lecture', this.lectureForm.value);
    }
    else {
      this.globalService.httpService.snackBar('입력하지 않은 필드가 있습니다. 모두 입력 후, 제출해 주세요');
    }
  }
}
