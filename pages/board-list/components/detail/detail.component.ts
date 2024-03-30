import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GlobalService } from '../../../../shared/services/global.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  public currentDate!: string;

  constructor(public globalService: GlobalService) {
    this.currentDate = this.globalService.dateService.getCurrentDate();
  }
}
