import React, { useState, useEffect } from "react";
import './SearchBar.css'

function SearchBar() {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([
    "Hakimi",
    "Mbappe",
    "Cavani",
    "Reus",
  ]);
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [options, query]);

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Search..."
        autoComplete="off"
        id = "search_bar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="dropdown">
        {filteredOptions.map((option, index) => (
          <button key={index} className="option" onClick={() => setQuery(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
