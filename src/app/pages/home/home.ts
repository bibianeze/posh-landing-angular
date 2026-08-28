import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Showcase } from '../../components/showcase/showcase';
import { Features } from '../../components/features/features';
import { Cta } from '../../components/cta/cta';
import { Contact } from '../../components/contact/contact';

@Component({
  selector: 'app-home',
  imports: [Hero, Showcase, Features, Cta, Contact],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  onExplore() {
    document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' });
  }
}
