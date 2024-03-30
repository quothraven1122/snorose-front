import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

@Component({
  selector: 'app-swiper',
  standalone: true,
  imports: [],
  templateUrl: './swiper.component.html',
  styleUrl: './swiper.component.scss'
})
export class SwiperComponent implements AfterViewInit {
  ngAfterViewInit() {
    const swiperParams: SwiperOptions = {
      modules: [Pagination, Navigation, Autoplay],
      slidesPerView: 1,
      spaceBetween: 50,
      grabCursor: true,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    };
    
    const swiper = new Swiper('.swiper', swiperParams);
  }

}
