import { useRef } from "react";
import { Icon, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}
const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Icon as={BsSearch} />
        </InputLeftElement>
        <Input type="search" ref={ref} placeholder="Search Games..." borderRadius={20} variant={"filled"} />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
