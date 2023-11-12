import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none">
        <Icon as={BsSearch} />
      </InputLeftElement>
      <Input type="search" placeholder="Search Games..." borderRadius={20} variant={"filled"} />
    </InputGroup>
  );
};

export default SearchInput;
