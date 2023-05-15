import React, { useState } from "react";
import SearchButton from "./SearchButton";

const Search = ({ search }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSubmit = e => {
    //preventDefault() -> prevent it from submitting ()
    e.preventDefault();
    if (searchInput) {
      search(searchInput);
    }
  };

  return (
    <div className="search">
      <div className="search-header">
        <h4 className="text-left">Search Bookings</h4>
      </div>
      {/* Make a row */}
      <div className="row search-wrapper">
        {/* Use col because I want full width for input */}
        <div className="col">
          <form className="form-group search-box" onSubmit={handleSubmit}>
            <label htmlFor="customerName">Customer name</label>
            <div className="search-row">
              <input
                type="text"
                id="customerName"
                className="form-control"
                placeholder="Type the first name of your customer"
                //onChange -> The onchange event occurs when the value of an element has been changed.
                //e.target.value -> retrieves the value of that element
                onChange={e => setSearchInput(e.target.value)}
                value={searchInput}
              />
              <SearchButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Search;
