import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rad-gif',
  templateUrl: './rad-gif.component.html',
  styleUrls: ['./rad-gif.component.css']
})
export class RadGifComponent implements OnInit {

  constructor() { }

  radGif: string = "https://media.giphy.com/media/q3AZiDWRj8mhW/giphy.gif"

  ngOnInit() {
  }

}
