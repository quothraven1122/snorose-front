import { Injectable } from "@angular/core";
import { LayoutService } from "./layout.service";
import { HttpService } from "./http.service";
import { DateService } from "./date.service";

@Injectable({ providedIn: 'root' })
export class GlobalService {
    constructor(
        public dateService: DateService,
        public httpService: HttpService,
        public layoutService: LayoutService,
    ) { }

}