import { Box, Button, HStack, Heading, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { genres, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
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
                <Image src={getCroppedImageUrl(genre.image_background)} boxSize={10} borderRadius={8} objectFit={"cover"}></Image>
                <Button
                  whiteSpace={"normal"}
                  textAlign={"left"}
                  fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                  variant="link"
                  onClick={() => onSelectGenre(genre)}
                >
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
