import React, { PureComponent } from 'react';
import { sortTypes, filterTypes } from "../settings";

class SearchBar extends PureComponent {

  render() {
    return (
      <div>
  
        <strong>Sort by:</strong>
        <fieldset>
          <label>
            <input
              name="sort-group"
              type="radio"
              value={sortTypes.alpha}
              onChange={this.handleSortChange}
            />
            {sortTypes.alpha}
          </label>
          <label>
            <input
              name="sort-group"
              type="radio"
              value={sortTypes.price}
              onChange={this.handleSortChange}
            />
            {sortTypes.price}
          </label>
        </fieldset>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={this.handleFilterChange}>
            {this.renderFilterTypes()}
          </select>
        </label>
  
      </div>
    );
  }

  handleSortChange = event => {
    this.props.setSortType(event.target.value);
  }

  handleFilterChange = event => {
    this.props.setFilterType(event.target.value);
  }

  renderFilterTypes = () => {
    return Object.values(filterTypes).map(filterType => {
      return <option key={filterType} value={filterType}>{filterType}</option>
    });
  }
  
}

SearchBar.defaultProps = {
  setSortType: () => console.error("Missing setSortType callback"),
  setFilterType: () => console.error("Missing setFilterType callback")
}

export default SearchBar;
