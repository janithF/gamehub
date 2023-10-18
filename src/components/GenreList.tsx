import { Box, Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}:Props) => {
  const { genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && null}
      {isLoading &&
        skeletons.map((skeleton) => (
          <Box paddingY={"5px"} key={skeleton}>
            <GenreSkeleton />
          </Box>
        ))}
      <List>
        {genres.map((genre) => {
          return (
            <ListItem key={genre.id} paddingY={"5px"}>
              <HStack justifyContent="flex-start">
                <Image src={getCroppedImageUrl(genre.image_background)} boxSize={10} borderRadius={8}></Image>
                <Button variant="link" onClick={() => onSelectGenre(genre)}>
                  {genre.name}
                </Button>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
