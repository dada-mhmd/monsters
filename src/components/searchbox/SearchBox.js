import React from "react";
import "./searchbox.css";

function SearchBox({ placeholder, handleChange }) {
  return (
    <div>
      <input
        className="search"
        onChange={handleChange}
        type="search"
        placeholder={placeholder}
      />
    </div>
  );
}

export default SearchBox;
