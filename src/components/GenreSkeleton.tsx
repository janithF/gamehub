import { HStack, Skeleton } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize={10} borderRadius={8} />
      <Skeleton width="70px" height="15px" />
    </HStack>
  );
};

export default GenreSkeleton;
