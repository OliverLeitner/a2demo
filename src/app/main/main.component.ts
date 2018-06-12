import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
    selector: 'main',
    templateUrl: './main.component.html',
})
export class MainComponent {
    constructor(private _router: Router){}

    onBack(): void {
        this._router.navigate(['/']); 
    }
}
