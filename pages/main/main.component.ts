import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SwiperComponent } from '../../shared/components/atom/swiper/swiper.component';
import { GlobalService } from '../../shared/services/global.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatDatepickerModule, SwiperComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class MainComponent {

  public selected!: Date | null;

  constructor(public globalService: GlobalService) {}

}
