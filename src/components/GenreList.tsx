import { Box, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
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
              <HStack>
                <Image src={getCroppedImageUrl(genre.image_background)} boxSize={10} borderRadius={8}></Image>
                <Text fontSize={"lg"}>{genre.name}</Text>
              </HStack>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default GenreList;
