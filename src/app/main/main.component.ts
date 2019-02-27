import { Component } from '@angular/core';
import { Router }  from '@angular/router';

declare function clickLightbox(img_id: string) : void;
const window: any = {};

//overriding href directive...
//@Directive({
    // tslint:disable-next-line:directive-selector
//    selector : '[href]'
//})
//on certain link targets
//kinda like the js handler stuff...
/*export class HrefDirective {
    @Input() public href: string | undefined;
    @HostListener('click', ['$event']) public onClick(event: Event): void {
        if (!this.href || this.href === '#' || (this.href && this.href.length === 0)) {
            event.preventDefault();
        }
    }
}*/
@Component({
    selector: 'main',
    templateUrl: './main.component.html',
})

export class MainComponent {
    img_id: string = '';

    //the simplest lightbox ever
    clickLightbox(img_id) {
        document.getElementById(img_id+'_small').removeAttribute('href');
        if (document.getElementById(img_id+'_large').style.display == 'none') {
            document.getElementById(img_id+'_large').style.display = 'block';
        } else {
            document.getElementById(img_id+'_large').style.display = 'none';
        }
    }

    constructor(private _router: Router){
    }

    onBack(): void {
        this._router.navigate(['/']); 
    }
}
