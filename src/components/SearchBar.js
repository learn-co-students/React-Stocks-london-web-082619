import React from 'react';

const SearchBar = (props) => {

  const handleSortChange = e => {
    props.setSort(e.target.value)
  }

  const handleFilterChange = e => {
    props.setFilter(e.target.value)
  }

  return (
    < div >

      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Default" checked={props.sort === "Default" ? true : false} onChange={handleSortChange} />
        Default
      </label>
      <label>
        <input type="radio" value="Alphabetically" checked={props.sort === "Alphabetically" ? true : false} onChange={handleSortChange} />
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" checked={props.sort === "Price" ? true : false} onChange={handleSortChange} />
        Price
      </label>
      <br />

      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div >
  );
}


export default SearchBar;
