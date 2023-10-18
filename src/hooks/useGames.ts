import useData from "./useData";
import { Genre } from "./useGenres";

export interface GamePlatform {
  platform: {
    id: number;
    name: string;
    slug: string;
  };
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: GamePlatform[];
  metacritic: number;
}

const useGames = (selectedGenre: Genre | null) => {
  const { data: games, error, isLoading } = useData<Game>('/games', {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);
  return { games, error, isLoading };
};

export default useGames;
