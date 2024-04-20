import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({ providedIn: 'root' })
export class HttpService {

  constructor(private _snackBar: MatSnackBar) {

  }

  public snackBar(text: string, undo: string = "", duration: number = 2000) {
    this._snackBar.open(text, undo, {
      duration: duration,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

}