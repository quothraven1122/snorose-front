import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../../../shared/services/global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-detail',
  templateUrl: './file-detail.component.html',
  styleUrl: './file-detail.component.scss'
})
export class FileDetailComponent implements OnInit {
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
