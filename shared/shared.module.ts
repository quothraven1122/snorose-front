import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperComponent } from './components/atom/swiper/swiper.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ListComponent } from './components/atom/list/list.component';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SwiperComponent,
    ListComponent
  ],
  imports: [
    RouterLink,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatRippleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSort,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
  ],
  exports: [
    SwiperComponent,
    ListComponent,
    RouterLink,
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatRippleModule,
    MatDividerModule,
    MatFormFieldModule,
    MatTabsModule,
    MatMenuModule,
    MatCardModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatSort,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatBottomSheetModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
