import { Component, OnInit } from '@angular/core';
import {IMAGES} from '../mock/mock-image';


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  images = IMAGES;
  constructor() { }

  ngOnInit(): void {
  }

}
