import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from '../../../../shared/services/global.service';
import { IReviewDetailResponse } from '../../../../shared/http/review.http';

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrl: './review-detail.component.scss'
})
export class ReviewDetailComponent implements OnInit {

  public title: string = '제목';
  public userDisplay: string = '작성자';
  public createdAt: string = '작성 일자';
  public content: string = '내용'
  public lectureName: string = '강의명';
  public professor: string = '교수명';
  public classNumber: number = 1;
  public lectureYear: number = 2023
  public semester: string = '1학기';
  public lectureType: string = '전공 필수';
  public isPF: boolean = false;
  public fileName: string = '파일 이름.pdf';

  public isLoading = false;

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public globalService: GlobalService
  ) { }

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe(params => {
      if (params.get('id') == null) {
        this.router.navigateByUrl('**');
      }

      this.globalService.dalService.reviewHttp.getDetail(Number(params.get('id'))).subscribe((response: IReviewDetailResponse) => {
        if (response.isSuccess) {
          console.log('리뷰 상세 내역', response);
          this.title = response.result.title;
          this.userDisplay = response.result.userDisplay;
          this.createdAt = response.result.createdAt;
          this.content = response.result.content;
          this.lectureName = response.result.lectureName;
          this.professor = response.result.professor;
          this.classNumber = response.result.classNumber;
          this.lectureYear = response.result.lectureYear;
          this.semester = response.result.semester;
          this.lectureType = response.result.lectureType;
          this.isPF = response.result.isPF;
          this.fileName = response.result.fileName;
          this.isLoading = false;
        }
      })
    });
  }
}