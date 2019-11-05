import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  render() {

    return (
      <div>
        <SearchBar setSort={this.props.setSort}
                   setType={this.props.setType}/>
          
          <div className="row">
            <div className="col-8">
      
              <StockContainer stocks={this.props.stocks}
                              buyStock={this.props.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer userStocks={this.props.userStocks}
                                  sellStock={this.props.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
