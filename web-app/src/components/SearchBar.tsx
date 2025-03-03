import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearch: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Cryptocurrencies..."
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
      className="border p-2 rounded-lg w-full mb-4"
    />
  );
};

export default SearchBar;
