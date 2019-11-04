import React from 'react';

class  SearchBar extends React.Component {
  render (){
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="sort" value="Alphabetically" checked = {null} onChange={(event) => this.props.displayAlphabetically(event)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name = "sort" value="Price" checked = {null}  onChange={(event) => this.props.displayByPrice(event)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(event) => this.props.filterStock(event)}>
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
