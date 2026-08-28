import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  eyebrow = input('Introducing POSH');
  headline = input('remarkable');
  subtext = input('Anything you can design, you can design better.');

  exploreClicked = output();

  onExploreClick() {
    this.exploreClicked.emit();
  }
}