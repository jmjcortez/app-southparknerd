import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  selected = false;

  constructor() { }

  ngOnInit(): void {
  }


  toggleSelected = (): void => {
    this.selected = !this.selected;
  }

}
