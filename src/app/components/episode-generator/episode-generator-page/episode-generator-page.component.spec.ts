import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeGeneratorPageComponent } from './episode-generator-page.component';

describe('EpisodeGeneratorPageComponent', () => {
  let component: EpisodeGeneratorPageComponent;
  let fixture: ComponentFixture<EpisodeGeneratorPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodeGeneratorPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodeGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
