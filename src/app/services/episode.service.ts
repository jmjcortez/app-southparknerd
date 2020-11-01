import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Episode } from '../models/episode';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {

  episodesUrl = 'http://127.0.0.1:8000/api/episodes/';

  constructor(private http: HttpClient) { }

  getEpisode = (episodeQuery: any): Observable<Episode> => {
    const query = this.formatQuery(episodeQuery);

    return this.http.get<Episode>(`${this.episodesUrl}random/?${query}`);
  }

  formatQuery = (episodeQuery: any): string => {
    let query = '';
    let characterQuery = '';

    if (episodeQuery.isClassic) {
      query = query.concat('&is_classic=1');
    }

    episodeQuery.seasons.map(
      (season: any) => {
        if (season.selected) {
          query = query.concat(`&seasons=${season.number}`);
        }
      }
    );

    episodeQuery.characters.map(
      (character: any) => {
        if (character.selected) {
          characterQuery = characterQuery.concat(`&characters=${character.name}`);
        }
      }
    );

    if (characterQuery !== '') {
      query = query.concat(characterQuery);
    }

    return query;
  }
}
