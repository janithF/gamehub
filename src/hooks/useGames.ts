import { GameQuery } from "../App";
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

const useGames = (gameQuery:GameQuery) => {
  const {
    data: games,
    error,
    isLoading,
  } = useData<Game>("/games", { params: { genres: gameQuery.genre?.id, parent_platforms: gameQuery.platform?.id } }, [gameQuery]);
  return { games, error, isLoading };
};

export default useGames;
