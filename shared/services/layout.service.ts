import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class LayoutService {

    public bodyHeight!: string;
    
    public getMainHeight() {
        this.bodyHeight = `${window.innerHeight - 120}px`;
        return this.bodyHeight;
    }

}