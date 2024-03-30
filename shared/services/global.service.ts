import { Injectable } from "@angular/core";
import { LayoutService } from "./layout.service";
import { HttpService } from "./http.service";

@Injectable({ providedIn: 'root' })
export class GlobalService {
    constructor(
        public httpService: HttpService,
        public layoutService: LayoutService,
    ) {}
    
}