import React from "react";
import "./search_input.css";
import { FaSearch } from "react-icons/fa";
export default function SearchInput() {
  return (
    <div className="search-div">
      <FaSearch className="search-icon" />
      <input type="text" placeholder="Search" />
    </div>
  );
}
