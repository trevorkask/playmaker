import React, { useState, useEffect } from "react";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([
    "Prefix 1 Option 1",
    "Prefix 1 Option 2",
    "Prefix 2 Option 1",
    "Prefix 2 Option 2",
  ]);
  const [filteredOptions, setFilteredOptions] = useState(options);

  useEffect(() => {
    setFilteredOptions(
      options.filter((option) =>
        option.toLowerCase().startsWith(query.toLowerCase())
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
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="dropdown">
        {filteredOptions.map((option, index) => (
          <div key={index} className="option" onClick={() => setQuery(option)}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchBar;
