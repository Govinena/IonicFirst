import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}

  getImageLink: any;

  maitest: any = 'may app 1';

   imageLink: any;

  imagefun(){
    // console.log('its working...')
    this.imageLink = this.getImageLink;
  }

  onClick(){
    this.router.navigate(['videos/']);
  }
}
