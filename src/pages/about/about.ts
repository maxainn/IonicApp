import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-about',
    templateUrl: 'about.html'
})
export class AboutPage {
peliculas: any;
    constructor(public navCtrl: NavController, public http: Http) {
        console.log('paso 1');
        this.http.get('http://swapi.co/api/people/?page=2')
            .map(res => res.json())
            .subscribe(data => {
                console.log('paso 3');
                console.log(data);
                this.peliculas = data.results;
            });
    }




}
