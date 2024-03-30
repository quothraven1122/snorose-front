import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-file-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './file-detail.component.html',
  styleUrl: './file-detail.component.scss'
})
export class FileDetailComponent {
  public currentDate!: string;
  public name: string = 'filename.pdf';

  constructor(public globalService: GlobalService) {
    this.currentDate = this.globalService.dateService.getCurrentDate();
  }

}
