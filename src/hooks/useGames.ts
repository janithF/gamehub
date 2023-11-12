import useData from "./useData";
import { Genre } from "./useGenres";
import { Platform } from "./usePlatforms";

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

const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) => {
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>("/games", { params: { genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id } }, [selectedGenre?.id, selectedPlatform?.id]);
  return { games, error, isLoading };
};

export default useGames;
