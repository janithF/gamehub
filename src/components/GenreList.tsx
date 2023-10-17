import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <List>
      {genres.map((genre) => {
        return (
          <ListItem key={genre.id} paddingY={'5px'}>
            <HStack >
              <Image src={getCroppedImageUrl(genre.image_background)} boxSize={10} borderRadius={8}></Image>
              <Text fontSize={"lg"}>{genre.name}</Text>
            </HStack>
          </ListItem>
        );
      })}
    </List>
  );
};

export default GenreList;
