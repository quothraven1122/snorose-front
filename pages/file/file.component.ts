import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { GlobalService } from '../../shared/services/global.service';
import { merge, startWith, switchMap, map } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

export interface FileData {
  postId: number,
  title: string;
  writer: string;
  createdAt: string;
  likeCount: number;
  viewCount: number;
}

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss'
})
export class FileComponent {

  public displayedColumns: string[] = ['postId', 'title', 'likeCount', 'createdAt'];
  public dataSource = new MatTableDataSource<FileData>([]);

  public isLoadingResults: boolean = false;
  public resultsLength: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public globalService: GlobalService) { }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    console.log('paginator pageIndex', this.paginator.pageIndex);

    merge(this.sort.sortChange, this.paginator.page).pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.globalService.dalService.reviewHttp.getList(this.paginator.pageIndex)
      }),
      map((data) => {
        // Flip flag to show that loading has finished.
        this.isLoadingResults = false;
        this.resultsLength = data ? data.result.length : 0;
        return data ? data.result : [];
      }),
    ).subscribe(data => (this.dataSource.data = data));
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
