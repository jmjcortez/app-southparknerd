import { Component, OnInit } from '@angular/core';

import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-episode-generator-page',
  templateUrl: './episode-generator-page.component.html',
  styleUrls: ['./episode-generator-page.component.scss'],
  animations: [
    trigger('collapseanimation', [
      state('small', style({
        height : '0px',
      })),
      state('large', style({
        height : '315px',
      })),
      transition('small <=> large', animate('400ms ease-in')),
    ]),
    trigger('collapsechracters', [
      state('hidden', style({
        height : '0px',
      })),
      state('reveal', style({
        height : '800px',
      })),
      transition('hidden <=> reveal', animate('400ms ease-in')),
    ]),
  ]
})
export class EpisodeGeneratorPageComponent implements OnInit {

  panelOpenState = false;

  state = 'small';
  charactersHidden = 'hidden';

  constructor() { }

  ngOnInit(): void {
  }

  animateCollapse = (): void => {
    this.state = (this.state === 'small' ? 'large' : 'small');
    // this.filterArrowIcon = 'expand_more';
  }

  animateCharCollapse = (): void => {
    this.charactersHidden = (this.charactersHidden === 'hidden' ? 'reveal' : 'hidden');
    // this.characterArrowIcon = 'expand_more';
  }

}
