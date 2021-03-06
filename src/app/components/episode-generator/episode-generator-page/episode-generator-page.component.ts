import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { CharacterService } from 'src/app/services/character.service';
import { Character } from 'src/app/models/character';
import { Episode } from 'src/app/models/episode';
import { EpisodeService } from 'src/app/services/episode.service';
import { HttpErrorResponse } from '@angular/common/http';

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
        height : '400px',
      })),
      transition('small <=> large', animate('400ms ease-in')),
    ]),
    trigger('collapsechracters', [
      state('hidden', style({
        height : '0px',
      })),
      state('reveal', style({
        height : '100%',
      })),
      transition('hidden <=> reveal', animate('400ms ease-in')),
    ]),
  ]
})
export class EpisodeGeneratorPageComponent implements OnInit {

  panelOpenState = false;
  generatingEpisode = false;

  state = 'small';
  charactersHidden = 'hidden';

  characters: Character[];
  episode: Episode;
  error: HttpErrorResponse;
  returnedEmptyEpisode = false;

  episodeQuery = {
    isClassic: 0,
    seasons: [
      {number: 1, selected: true}, {number: 2, selected: true}, {number: 3, selected: true}, {number: 4, selected: true},
      {number: 5, selected: true}, {number: 6, selected: true}, {number: 7, selected: true}, {number: 8, selected: true},
      {number: 9, selected: true}, {number: 10, selected: true}, {number: 11, selected: true}, {number: 12, selected: true},
      {number: 13, selected: true}, {number: 14, selected: true}, {number: 15, selected: true}, {number: 16, selected: true},
      {number: 17, selected: true}, {number: 18, selected: true}, {number: 19, selected: true}, {number: 20, selected: true},
      {number: 21, selected: true}, {number: 22, selected: true}, {number: 23, selected: true}, {number: 24, selected: true},
    ],
    characters: []
  };

  constructor(private characterService: CharacterService, private episodeService: EpisodeService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  animateCollapse = (): void => {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }

  animateCharCollapse = (): void => {
    this.charactersHidden = (this.charactersHidden === 'hidden' ? 'reveal' : 'hidden');
  }

  getCharacters = (): void => {
    this.characterService.getCharacters().subscribe(
      (data) => {
        this.episodeQuery.characters = data.characters.map(
          character => {
            return {
              ...character,
              selected: false,
            };
          }
        );
      },
    );
  }

  toggleButton = (index: number): void => {
    this.episodeQuery.seasons[index].selected = !this.episodeQuery.seasons[index].selected;
  }

  toggleClassic = (isClassic: number): void => {
    this.episodeQuery.isClassic = isClassic;
  }

  toggleCharacter = (index: number): void => {
    this.episodeQuery.characters[index].selected = !this.episodeQuery.characters[index].selected;
  }

  generateEpisode = (): void => {
    this.generatingEpisode = true;
    this.returnedEmptyEpisode = false;

    this.episodeService.getEpisode(this.episodeQuery).subscribe(
      (episode) => {
        this.generatingEpisode = false;

        if (Object.keys(episode).length) {
          this.episode = episode;
        }
        else {
          this.episode = null;
          this.returnedEmptyEpisode = true;
        }

        this.error = null;
      },
      (error) => {
        this.generatingEpisode = false;
        this.episode = null;
        this.error = error;
      }
    );
  }

}

@Pipe({name: 'getImgUrl'})
export class GetImgUrl implements PipeTransform {
  transform(url: string): string {
    return url.split('/revision')[0];
  }
}
