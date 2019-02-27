import { Http, Headers, RequestOptions } from '@angular/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'data',
    templateUrl: './data.component.html',
})
export class DataComponent {
    title = 'app';
    getData: any[];
    constructor(private http: Http) {
        const myheaders = new Headers();
        myheaders.append('Content-Type', 'application/json;charset=UTF-8');
        myheaders.append('Accept', 'text/plain,text/html,application/xhtml+xml,application/xml,application/json;q=0.9,*/*;q=0.8');
        const options = new RequestOptions({ headers: myheaders });
        this.http.get('http://angular.neverslair-blog.net:4020/get.php', options)
            .subscribe(
                (data) => {
                    this.getData = data.json();
                    console.log(this.getData);
                }
            );
    }
}
