import { Component, OnInit } from '@angular/core';
import { Http, Response, HttpModule, Headers, RequestOptions} from '@angular/http';
import { Router }  from '@angular/router';
import { Guest } from '../form.model';

@Component({
    selector: 'guest',
    templateUrl: './guest-form.component.html',
    preserveWhitespaces: true
})
export class GuestFormComponent {
    model = new Guest('', '', '', '');

    constructor(private http:Http) {
    }

    onSubmit(user: any) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        this.http.post('http://angular.neverslair-blog.net:4020/insert.php', btoa(JSON.stringify(user)), {headers: headers})
            .subscribe(
                data => {
                    console.log(data);
                    document.getElementsByTagName('form')[0].style.display = 'none';
                    document.getElementById('submit_done').style.display = 'block';
                },
                error => {
                    console.log('in the error one...');
                    console.log(error);
                    alert('something went wrong!');
                }
        )
    }

    /*ngOnInit() {
  }

  get currentGuest() { return JSON.stringify(this.model); }*/
}
