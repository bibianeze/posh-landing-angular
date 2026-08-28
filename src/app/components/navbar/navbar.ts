import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavLink {
  label: string;
  path: string;
}

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  navLinks: NavLink[] = [
    { label: 'Homes', path: '' },
    { label: 'Pages', path: '' },
    { label: 'Components', path: '' },
    { label: 'Docs/About', path: '/about' },
  ];
}