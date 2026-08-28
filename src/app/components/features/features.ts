import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  imports: [],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {
  features = [
    { text: 'Optimized for every screen size down to a single pixel.' },
    { text: 'The most modular layout system on the planet.' },
    { text: 'More powerful than most HTML5 templates.' },
    { text: 'Bootstrap 5 takes POSH to a whole new level.' },
  ];
}