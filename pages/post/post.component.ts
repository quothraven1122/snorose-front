import { Component } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IReviewCreateRequest, IReviewCreateResponse, LectureType, Semester } from '../../shared/http/review.http';

/**
 * 제목, 내용, 작성자
 * 
 * - 강의 정보
 * 강의 이름, 강의 교수님, 년도, 학기, 강의 타입, 중간/기말 여부, pf 여부
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

  public Semester = Semester;
  public LectureType = LectureType;

  public hasMidterm: boolean = false;
  public hasFinalterm: boolean = false;
  public file: File | null = null;
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

  private setHadMidterm(type: string) {
    switch (type) {
      case 'onlyMidterm':
        this.hasMidterm = true;
        break;
      case 'onlyFinal':
        this.hasFinalterm = true;
        break;
      case 'both':
        this.hasMidterm = true;
        this.hasFinalterm = true;
        break;
    }
  }

  public onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file.type !== 'application/pdf') {
      this.globalService.httpService.snackBar('파일은 pdf만 업로드 가능합니다.');
      return;
    }

    if (file) {
      this.file = file;
      this.fileName = file.name;
    }
  }

  public onClickSubmit(event: any) {
    console.log('button click');
    if (this.reviewForm.valid && this.lectureForm.valid) {
      // 제출!!
      console.log('review', this.reviewForm.value);
      console.log('lecture', this.lectureForm.value);

      this.setHadMidterm(this.lectureForm.value.hadMidterm);

      const reviewData: IReviewCreateRequest = {
        // 게시글 정보
        boardId: 5,
        userDisplay: '사용자 닉네임',
        category: '카테고리', // 없앨 듯
        title: this.reviewForm.value.title,
        content: this.reviewForm.value.content,

        // 강의 정보
        lectureName: this.lectureForm.value.lectureName,
        professor: this.lectureForm.value.professor,
        classNumber: this.lectureForm.value.classNumber,
        lectureYear: this.lectureForm.value.lectureYear,
        semester: this.lectureForm.value.semester,
        hasMidterm: this.hasMidterm,
        hasFinalterm: this.hasFinalterm,
        lectureType: this.lectureForm.value.lectureType,
        isPF: this.lectureForm.value.isPF,

        // 파일 정보
        filePath: 'this.file',
        fileName: this.fileName,
      };


      // this.globalService.dalService.reviewHttp.create(reviewData).subscribe((response: IReviewCreateResponse) => {
      //   console.log('리뷰 작성 성공', response);
      // });
    }
    else {
      this.globalService.httpService.snackBar('입력하지 않은 필드가 있습니다. 모두 입력 후, 제출해 주세요');
    }
  }
}
