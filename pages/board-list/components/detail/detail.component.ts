import { Component } from '@angular/core';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  public currentDate!: string;

  constructor(public globalService: GlobalService) {
    this.currentDate = this.globalService.dateService.getCurrentDate();
  }
}
