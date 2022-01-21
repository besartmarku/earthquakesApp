import React from "react";
import { ListItemContainer } from "./styles";
import { ListItemProps } from "./types";

const SearchInput: React.FC<ListItemProps> = ({ id, place, mag, magType }) => {
  return (
    <ListItemContainer>
      {id} - {place} - {magType} - {mag}
    </ListItemContainer>
  );
};

export default SearchInput;
