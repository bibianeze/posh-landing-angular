import { Component } from '@angular/core';
import { ImgCard } from '../img-card/img-card';

interface ShowcaseItem {
  title: string;
  subtitle: string;
  imgId: number;
}

@Component({
  selector: 'app-showcase',
  imports: [ImgCard],
  templateUrl: './showcase.html',
  styleUrl: './showcase.css',
})
export class Showcase {
  cards: ShowcaseItem[] = [
    { title: 'Landing NOKIA', subtitle: '(Nokia 5)', imgId: 1 },
    { title: 'Digital Agency', subtitle: '(Technext, Green Chameleon)', imgId: 20 },
    { title: 'Travel Agency', subtitle: '(ireland.com)', imgId: 28 },
    { title: 'Hospital', subtitle: '(Northwestern Medicine, Columbus Regional Health)', imgId: 48 },
    { title: 'Education', subtitle: '(American University, Stanford)', imgId: 60 },
    { title: 'Conference', subtitle: '(Chain React)', imgId: 76 },
    { title: 'Hotel', subtitle: '(Grand Amara, Cliffside Resort)', imgId: 96 },
    { title: 'PoshCamp 2018', subtitle: '(1000+ Sites, One Single Template)', imgId: 119 },
    { title: 'Fashion Boutique', subtitle: '(Studio Noir, Maison Elle)', imgId: 128 },
    { title: 'Restaurant', subtitle: '(The Copper Table)', imgId: 142 },
    { title: 'Photography Portfolio', subtitle: '(Wildlife Photography)', imgId: 160 },
    { title: 'Wedding Website', subtitle: '(Sarah & Mike)', imgId: 177 },
    { title: 'SaaS Product', subtitle: '(Flowbase, Cloudnest)', imgId: 183 },
    { title: 'Startup Landing', subtitle: '(Launchpad Co.)', imgId: 201 },
    { title: 'Architecture Studio', subtitle: '(Form & Frame)', imgId: 211 },
    { title: 'Fitness App', subtitle: '(Pulse, StrongPath)', imgId: 225 },
    { title: 'Pet Adoption', subtitle: '(Furever Home)', imgId: 237 },
    { title: 'Coffee Roastery', subtitle: '(Roast & Co.)', imgId: 244 },
    { title: 'Music Festival', subtitle: '(Echo Fields)', imgId: 250 },
    { title: 'Law Firm', subtitle: '(Marsh & Vance)', imgId: 265 },
    { title: 'Interior Design', subtitle: '(Studio Linen)', imgId: 288 },
    { title: 'Real Estate', subtitle: '(Harbor Properties)', imgId: 301 },
    { title: 'Podcast Network', subtitle: '(Late Night Talks)', imgId: 318 },
    { title: 'Financial App', subtitle: '(Ledger, PennyWise)', imgId: 338 },
    { title: 'Book Publisher', subtitle: '(Inkwell Press)', imgId: 342 },
    { title: 'Skincare Brand', subtitle: '(Bare & Bright)', imgId: 366 },
    { title: 'NGO Charity', subtitle: '(Global Fund)', imgId: 396 },
    { title: 'Automotive', subtitle: '(Torque Motors)', imgId: 411 },
    { title: 'Design Agency', subtitle: '(Framehouse Studio)', imgId: 431 },
    { title: 'Event Planning', subtitle: '(Gather & Co.)', imgId: 450 },
  ];
}