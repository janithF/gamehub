import useData from "./useData";

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

const useGames = () => {
  const { data:games, error, isLoading } = useData<Game>("/games");

  return { games, error, isLoading };
};

export default useGames;
