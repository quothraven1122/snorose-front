import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { DatePipe } from '@angular/common';

export interface Section {
  name: string;
  updated: Date;
}

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatListModule, MatRippleModule, DatePipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  public name!: string | null;
  public folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];

}
