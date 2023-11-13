import { HStack } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

interface Props {
  rating: number;
}

const Rating = ({ rating }: Props) => {
  const stars = Array.from({ length: 5 }, (_, i) => i + 1).map((star) => <AiFillStar key={star} color={star <= rating ? "yellow" : "white"} />);

  return <HStack>{stars}</HStack>;
};

export default Rating;
