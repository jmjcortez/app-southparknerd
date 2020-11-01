import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CharacterList } from '../models/character';

import { CharacterService } from './character.service';

describe('CharacterService', () => {
  let service: CharacterService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CharacterService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve characters', () => {
    const dummyChars: CharacterList = {
      characters: [
        {name: 'Stan', bio: 'random', avatar_url: 'url'},
        {name: 'Kyle', bio: 'random', avatar_url: 'url'},
      ]
    };

    service.getCharacters().subscribe(
      characters => {
        expect(characters).toEqual(characters);
      }
    );

    const request = httpMock.expectOne(`${service.charactersUrl}`);
    expect(request.request.method).toEqual('GET');

    request.flush(dummyChars);
  });
});
