import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar displayAlphabetically = {this.props.displayAlphabetically} displayByPrice={this.props.displayByPrice} filterStock= {this.props.filterStock}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks = {this.props.stocks} buyStock = {this.props.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer boughtStock = {this.props.boughtStock} removeStock = {this.props.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
