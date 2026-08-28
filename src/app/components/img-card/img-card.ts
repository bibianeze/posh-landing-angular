import { Component, input } from '@angular/core';

@Component({
  selector: 'app-img-card',
  imports: [],
  templateUrl: './img-card.html',
  styleUrl: './img-card.css',
})
export class ImgCard {
  title = input<string>();
  subtitle = input<string>();
  imgId = input<number>();
}