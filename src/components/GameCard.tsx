import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Rating from "./Rating";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList platforms={game.platforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl" marginBottom={3}>{game.name}</Heading>
        <Rating rating={game.rating_top} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
