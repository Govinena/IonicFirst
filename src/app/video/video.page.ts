import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss'],
})
export class VideoPage implements OnInit {

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
