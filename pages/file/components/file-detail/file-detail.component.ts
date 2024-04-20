import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../shared/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-detail',
  templateUrl: './file-detail.component.html',
  styleUrl: './file-detail.component.scss'
})
export class FileDetailComponent implements OnInit {
  /**
 * 제목, 내용, 작성자
 * 
 * - 강의 정보
 * 강의 이름, 강의 교수님, 년도, 학기, 강의 타입, 중간/기말 여부, pf 여부
 * 
 * - 족보 정보
 * 파일 path, 파일 이름
 */

  public currentDate!: string;
  public name: string = 'filename.pdf';

  constructor(
    private router: Router,
    public globalService: GlobalService) {
    this.currentDate = this.globalService.dateService.getCurrentDateStr();
  }

  ngOnInit() {
    // if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras.state) {
    //   this.data = this.router.getCurrentNavigation().extras.state['data'];
    // }
  }
}
