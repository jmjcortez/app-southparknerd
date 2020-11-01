import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Episode } from '../models/episode';

import { EpisodeService } from './episode.service';

describe('EpisodeService', () => {
  let service: EpisodeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EpisodeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve an episode', () => {
    const dummyEp: Episode = {
      season: 1,
      title: 'string',
      rating: 9,
      episode_number: 1,
      is_sad: false,
      screenshot_url: 'string',
      characters: [
        {name: 'name', bio: 'bio', avatar_url: 'url'}
      ]
    };

    const episodeQuery = {
      isClassic: 0,
      seasons: [],
      characters: [],
    };

    service.getEpisode(episodeQuery).subscribe(episode => {
      expect(episode).toEqual(dummyEp);
    });

    const request = httpMock.expectOne(`${service.episodesUrl}random/?`);
    expect(request.request.method).toEqual('GET');

    request.flush(dummyEp);
  });

  it('should properly format is_classic query', () => {
    const episodeQuery = {
      isClassic: 1,
      seasons: [],
      characters: [],
    };

    const query = service.formatQuery(episodeQuery);

    expect(query).toEqual('&is_classic=1');
  });

  it('should properly format seasons query', () => {
    const episodeQuery = {
      isClassic: 0,
      seasons: [
        {number: 1, selected: true},
        {number: 2, selected: true},
        {number: 3, selected: false},
      ],
      characters: [],
    };

    const query = service.formatQuery(episodeQuery);

    expect(query).toEqual('&seasons=1&seasons=2');
  });

  it('should properly format characters query', () => {
    const episodeQuery = {
      isClassic: 0,
      seasons: [],
      characters: [
        {name: 'Stan', selected: true},
        {name: 'Kyle', selected: false},
        {name: 'Cartman', selected: false},
        {name: 'Kenny', selected: true},
      ],
    };

    const query = service.formatQuery(episodeQuery);

    expect(query).toEqual('&characters=Stan&characters=Kenny');
  });
});
