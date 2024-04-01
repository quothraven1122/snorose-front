import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  public fileName: string = '';

  public onFileSelected(event: any) {
    const file: File = event.target.value[0];

    if (file) {
      this.fileName = file.name;
    }
  }
}
