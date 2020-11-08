import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CharacterList } from '../models/character';
import { API } from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  charactersUrl = `${API}characters/`;

  constructor(private http: HttpClient) { }

  getCharacters = (): Observable<CharacterList> => {
    return this.http.get<CharacterList>(this.charactersUrl);
  }
}
