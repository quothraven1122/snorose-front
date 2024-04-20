import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { GlobalService } from '../../shared/services/global.service';
import { Router } from '@angular/router';

export interface FileData {
  id: number;
  title: string;
  writer: string;
  write_date: string;
}

/** Constants used to fill up our data base. */
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrl: './file.component.scss'
})
export class FileComponent {

  public name!: string | null;
  public date!: string;
  public displayedColumns: string[] = ['id', 'title', 'writer', 'write_date'];
  public dataSource: MatTableDataSource<FileData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private router: Router,
    public globalService: GlobalService
  ) {
    this.date = this.globalService.dateService.getCurrentDateStr();
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1, this.date));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  public onNaviagateClick(fileData: FileData) {
    this.router.navigate([`/${fileData.id}`], { queryParams: { data: fileData } });
  }


}

function createNewUser(id: number, date: string): FileData {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))];

  return {
    id: id,
    title: name,
    writer: name,
    write_date: date
  };
}
