import { Component } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';

export interface Section {
  name: string;
}

@Component({
  selector: 'app-board-list',
  templateUrl: './board-list.component.html',
  styleUrl: './board-list.component.scss'
})
export class BoardListComponent {

  public announcements: Section[] = [
    {
      name: '명예의 전당',
    },
    {
      name: '공지사항',
    },
  ];

  public communityList: Section[] = [
    {
      name: '함박눈방'
    },
    {
      name: '첫눈온방'
    },
    {
      name: '만년설방'
    }
  ];

  public departmentList: Section[] = [
    {
      name: '소프트웨어학부',
    },
    {
      name: '문과대학',
    },
    {
      name: '이과대학',
    },
    {
      name: '공과대학',
    },
    {
      name: '미술대학',
    },
    {
      name: '음악대학',
    },
  ]

  constructor(public globalService: GlobalService) { }

  public clickBoard(event: any) {
    console.log('clickBoard');

  }
}
