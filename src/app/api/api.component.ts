import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare function recursive(myArg: string): any;
declare function splitval(myArg: string): any;

@Component({
    selector: 'app-api',
    templateUrl: './api.component.html',
})
export class ApiComponent implements OnInit {
    getData: any[];
    listing: string;
    constructor(private http: Http) {
        this.http.get('https://api.cdnjs.com/libraries/less.js')
            .subscribe(
                (data) => {
                    this.getData = data.json();
                    this.recursive(this.getData);
                    document.getElementById('data_tag').innerHTML = this.listing;
                }
            );
    }

    splitval(val) {
        if (typeof val === 'object') {
            Object.entries(val).forEach(
                ([skey, sval]) => {
                    if (typeof sval === 'string') {
                        this.listing = this.listing + '<li>' + skey + ': ' + sval;
                    } else {
                        this.listing = this.listing + '<li class="dropdown-submenu">' + skey + ': <ul class="dropdown-menu">';
                        this.splitval(sval);
                    }
                }
            );
        } else {
            if (typeof val === 'string') {
                this.listing = this.listing + '<ul class="dropdown-menu"><li>' + val + '</li>';
            }
        }
        this.listing = this.listing + '</ul>';
    }

    recursive(val) {
        this.splitval(val);
        this.listing = '<ul id="menu" class="dropdown-menu">' + this.listing;
    }

    ngOnInit() {
    }

}
