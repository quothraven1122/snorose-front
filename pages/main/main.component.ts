import { Component } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  providers: [provideNativeDateAdapter()]
})
export class MainComponent {
  public selected!: Date | null;

  constructor(public globalService: GlobalService) { }
}
