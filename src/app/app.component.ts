import { Component } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent {
    //dummy template marker
    //title = 'app';

    //i think every angular 2 component needs at least
    //a construct in the class it has...
    constructor(private _router: Router){}

    //hamburger menu config
    config = {
        closeOnCLick: true,
        animation: 'arrow'
    };

    //our menu for html templating functionality
    public menuItemsArray: any[] = [
        {"title":"Main","link":"/main"},
        {"title":"Form","link":"/guest"},
        {"title":"List","link":"/data"},
        {"title":"Api","link":"/api"},
    ];

    //hamburger menu dummys
    public onMenuClose(){}
    public onMenuOpen(){}

    //hamburger menu the actual funct
    //when something is being clicked
    public onItemSelect(item:any){
        this._router.navigate([item.link]);
    }
}
