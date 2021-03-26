import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Sweet Photos of Dietrich and Nacho!';
  image1 = '../assets/IMG_0823.jpg';
  image2 = '../assets/IMG_1173.jpg';
  image3 = '../assets/IMG_0865.jpg';

  constructor() { }

  ngOnInit() {
  }

}