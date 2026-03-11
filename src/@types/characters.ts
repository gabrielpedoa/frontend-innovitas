export type ICharacter = {
  id?: number;
  original_character_id: number;
  name: string;
  species: string;
  gender: string;
  origin: string;
  location: string;
  image: string;
  status: string;
  user_id: number;
  created_at: Date;
};

export type ICharacterApiResponse = {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string; url: string };
  location: { name: string; url: string };
  image: string;
  episode: string[];
  created: Date;
};

export type IDefaultApiResponse<T> = {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
  };
  results: T;
};
