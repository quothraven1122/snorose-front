import { Component } from '@angular/core';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-file-detail',
  templateUrl: './file-detail.component.html',
  styleUrl: './file-detail.component.scss'
})
export class FileDetailComponent {
  public currentDate!: string;
  public name: string = 'filename.pdf';

  constructor(public globalService: GlobalService) {
    this.currentDate = this.globalService.dateService.getCurrentDateStr();
  }
}
