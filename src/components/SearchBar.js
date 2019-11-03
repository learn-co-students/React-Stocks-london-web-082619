import React from 'react';
import { sortTypes, filterTypes } from "../settings";

const SearchBar = ({sortType, setSortType, setFilterType}) => {

  const handleSortChange = event => {
    setSortType(event.target.value);
  }

  const handleFilterChange = event => {
    setFilterType(event.target.value);
  }


  return (
    <div>

      <strong>Sort by:</strong>
      <fieldset>
        <label>
          <input
            name="sort-group"
            type="radio"
            value={sortTypes.alpha}
            onChange={(handleSortChange)}
          />
          {sortTypes.alpha}
        </label>
        <label>
          <input
            name="sort-group"
            type="radio"
            value={sortTypes.price}
            onChange={handleSortChange}
          />
          {sortTypes.price}
        </label>
      </fieldset>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value={filterTypes.all}>All</option>
          <option value={filterTypes.tech}>Tech</option>
          <option value={filterTypes.sportwear}>Sportswear</option>
          <option value={filterTypes.finance}>Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
