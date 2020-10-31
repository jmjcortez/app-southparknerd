import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CharacterList } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  charactersUrl = 'http://127.0.0.1:8000/api/characters/';

  constructor(private http: HttpClient) { }

  getCharacter = (): Observable<CharacterList> => {
    return this.http.get<CharacterList>(this.charactersUrl);
  }
}
