// src/components/SearchBar.jsx
import React, { useState } from "react";
import tw from "tailwind-styled-components";

const SearchContainer = tw.div`
  relative lg:col-span-3 flex items-center justify-between p-4 bg-gray-800 bg-opacity-70 rounded-lg shadow-lg
  border border-gray-700
`;

const SearchInput = tw.input`
  flex-grow p-2 pl-4 bg-transparent text-white focus:outline-none placeholder-gray-400
`;

const SearchIcon = tw.svg`
  h-5 w-5 text-gray-400 mr-2
`;

const SearchBar = ({ onSearch, initialCity }) => {
  const [query, setQuery] = useState(initialCity);

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && query.trim() !== "") {
      onSearch(query);
      event.target.blur(); // Hide keyboard on mobile
    }
  };

  return (
    <SearchContainer>
      <SearchIcon
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </SearchIcon>
      <SearchInput
        type="text"
        placeholder="Search For Cities"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </SearchContainer>
  );
};

export default SearchBar;
