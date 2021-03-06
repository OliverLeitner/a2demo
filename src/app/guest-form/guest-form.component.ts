import { Component, OnInit } from '@angular/core';
import { Http, Response, HttpModule, Headers, RequestOptions} from '@angular/http';
import { Router } from '@angular/router';
import { Guest } from '../form.model';
import { Observable } from 'rxjs';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'guest',
    templateUrl: './guest-form.component.html',
    preserveWhitespaces: true,
    animations: [
        trigger('visibilityChanged', [
            state('shown', style({ opacity: 1 })),
            state('hidden', style({ opacity: 0 })),
            transition('shown => hidden', animate('600ms')),
            transition('hidden => shown', animate('300ms')),
        ])
    ]
})

// main form page class...
export class GuestFormComponent implements OnInit {
    // form handler model variable of custom type Guest
    // model -> ../form.model.ts
    model = new Guest('', '', '', '');
    // for picking the havardart pic, we reserve  string var
    pic: string;

    // some form validation etc
    guestForm: FormGroup;
    submitted: boolean = false;

    // hide form
    hideForm: boolean = false;

    // fadein and fadeout of the havardart image
    visibilityChanged: boolean;
    hideShowAnimation() {
        this.visibilityChanged = !this.visibilityChanged;
    }

    // the first thing that starts when page loads
    // so between initial image and the next one there
    // wont be exactly 10 seconds, then again
    // if the initial one takes a long time, it does
    // not interrupt the experience...
    constructor(
        private http: Http,
        private formBuilder: FormBuilder,
    ) {
        // regrab our havardart every 10 seconds
        setInterval(() => {
            this.hideShowAnimation();
            this.grabRandomArt();
        }, 10000);
    }

    // convenience getter for easy access to form fields
    get f() { return this.guestForm.controls; }

    // if we submit our form, we post against the given interface and hide the form and show
    // the submitted message
    onSubmit() {
        // this.submitted = true;
        if (this.guestForm.invalid) {
            return;
        }

        if (!this.guestForm.invalid) {
            const headers = new Headers();
            headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
            this.http.post(
                'http://angular.neverslair-blog.net:4020/insert.php',
                btoa(JSON.stringify(this.guestForm.value)),
                {headers: headers},
            )
                .subscribe(
                    data => {
                        console.log(data);
                        this.hideForm = true;
                    },
                    error => {
                        console.log('in the error one...');
                        console.log(error);
                        alert('something went wrong!');
                    }
                )
        }
    }

    // the function that grabs
    // a random image url from the havard art archive...
    grabRandomArt() {
        this.http.get(
            'https://api.harvardartmuseums.org/image?page=1&sort=random&size=1&q=width:<100&apikey=c6a42ba0-6fe2-11e8-ab88-0dac418e9237',
        )
            .subscribe(
                (data) => {
                    try {
                        this.pic = data.json().records[0].baseimageurl;
                    } catch (ex) {
                        console.log(ex);
                    }
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    // called after everything else has been loaded
    // lazy loading...
    ngOnInit() {
        // form formbuilder
        this.guestForm = this.formBuilder.group({
            email: ['', Validators.required],
            name: ['', Validators.required],
            address: ['', Validators.required],
            comment: ['', Validators.required],
        });
        // get some art
        this.grabRandomArt();
    }
}
