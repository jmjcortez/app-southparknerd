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

  getCharacter = (): Observable<Episode> => {
    return this.http.get<Episode>(`${this.episodesUrl}random/`);
  }
}
