import React from 'react';
import { sortTypes, filterTypes } from "../settings";

const SearchBar = ({setSortType, setFilterType}) => {

  const handleSortChange = event => {
    setSortType(event.target.value);
  }

  const handleFilterChange = event => {
    setFilterType(event.target.value);
  }

  const renderFilterTypes = () => {
    return Object.values(filterTypes).map(filterType => {
      return <option key={filterType} value={filterType}>{filterType}</option>
    });
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
          {renderFilterTypes()}
        </select>
      </label>


    </div>
  );
}

SearchBar.defaultProps = {
  setSortType: () => console.error("Missing setSortType callback"),
  setFilterType: () => console.error("Missing setFilterType callback")
}

export default SearchBar;
