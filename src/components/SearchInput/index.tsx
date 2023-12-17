import React from "react";

type SearchInputProps = {
  searchText: string;
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
};

const SearchInput: React.FC<SearchInputProps> = ({
  searchText,
  setSearchText,
}) => {
  return (
    <input
      type="text"
      placeholder="Search"
      className="p-2 border rounded"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default SearchInput;
