import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }
  imageList = []
  ngOnInit(): void {
  }

  onReadFileList() {
    this.imageList.push("assets/Plants/plant2.jpg")
    this.imageList.push("assets/Plants/plant3.jpg")
  }
}
