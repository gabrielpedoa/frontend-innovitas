import type { ICharacter } from "./characters";

export type IDashboard = {
  totalCharacters: number;
  totalEpisodes: number;
  totalLocations: number;
  userTotalCharacters: number | null;
  myFavoritesCharacters: ICharacter[] | null;
};
