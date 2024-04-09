import { Injectable } from "@angular/core";
import { LayoutService } from "./layout.service";
import { HttpService } from "./http.service";
import { DateService } from "./date.service";
import { MembershipService } from "./membership.service";

@Injectable({ providedIn: 'root' })
export class GlobalService {

    public point: number = 0;

    constructor(
        public dateService: DateService,
        public httpService: HttpService,
        public layoutService: LayoutService,
        public membershipService: MembershipService,
    ) { }

}