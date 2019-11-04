import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {
    return (
      <div>
        <SearchBar
            setFilter={this.props.setFilter}
            pressAlpha={this.props.pressAlpha}
            pressPrice={this.props.pressPrice}
            />

          <div className="row">
            <div className="col-8">

              <StockContainer
                  stocks={this.props.stocks}
                  buyStock={this.props.buyStock}
                  currentFilter={this.props.currentFilter}
                  alphaSort={this.props.alphaSort}
                  priceSort={this.props.priceSort}
                  />

            </div>
            <div className="col-4">

              <PortfolioContainer ownedStocks={this.props.ownedStocks} buyStock={this.props.buyStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
