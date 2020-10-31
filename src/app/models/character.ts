export interface Character {
  name: string;
  bio: string;
  avatar_url: string;
}

export interface CharacterList {
  characters: Character[];
}
