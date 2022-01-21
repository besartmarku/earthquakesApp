import React, { useState } from "react";
import { Container, Input, Button } from "./styles";
import { SearchInputProps } from "./types";

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  buttonTitle,
  type,
  onSearch,
}) => {
  const [inputValue, setInputValue] = useState<string>();
  return (
    <Container>
      <Input
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {inputValue && (
        <Button onClick={() => onSearch(type, inputValue)}>
          {buttonTitle}
        </Button>
      )}
    </Container>
  );
};

export default SearchInput;
