import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  // Optional parameters to pass to the swiper instance.
  // See http://idangero.us/swiper/api/ for valid options.
  slideOpts = {
    initialSlide: 1,
    autoplay: true,
    spaceBetween: 10,
    slidesPerView: 1.4,
    speed: 400
  };

  constructor() { }

  ngOnInit() {
  }

}
