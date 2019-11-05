import React from 'react';

class SearchBar extends React.Component {

  handleSortChange = (e) => {
    this.props.setSortType(e.target.value);
  }

  handleFilterChange = (e) => {
    this.props.setFilterType(e.target.value);
  }

  render(){
    return (
      <div>
  
        <strong>Sort by:</strong>
        <fieldset>
          <label>
            <input name='sort-group' type="radio" value="Alphabetically" onChange={this.handleSortChange}/>
            Alphabetically
          </label>
          <label>
            <input name='sort-group' type="radio" value="Price" onChange={this.handleSortChange}/>
            Price
          </label>
          </fieldset>
        <br/>
  
        <label>
          <strong>Filter:</strong>
          <select onChange={this.handleFilterChange}>
            <option value="All">All</option>
            <option value="Tech">Tech</option>
            <option value="Sportswear">Sportswear</option>
            <option value="Finance">Finance</option>
          </select>
        </label>
  
  
      </div>
    );
  }
}



export default SearchBar;
