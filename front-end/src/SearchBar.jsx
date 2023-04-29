import React, { useState, useEffect } from "react";
import './SearchBar.css'

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([
    "Hakimi",
    "Mbappe",
    "Cavani",
    "Reus",
  ]);
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showDropdown, setShowDropdown] = useState(false);

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

  const sendDataToParent = (option) => {
    props.onData(option);
    setQuery("");
    setShowDropdown(false);
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowDropdown(e.target.value !== "");
  };

  return (
    <div className="search-bar-container">
        <input
          type="text"
          placeholder="Search..."
          autoComplete="off"
          id = "search_bar"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
      {showDropdown && (
      <div className="dropdown">
        <ul>
          {filteredOptions.map((option, index) => (
            <li key={index} className="option" onClick={() => sendDataToParent(option)}>
              {option}
            </li>
          ))}
        </ul>
      </div>
      )}
    </div>
  );
}

export default SearchBar;
