import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import Api from '../helpers/API'
import { sortTypes, filterTypes } from '../helpers/Settings'

class MainContainer extends Component {

  state={
    stocks: [],
    portfolio: [],
    filterType: filterTypes.all,
    sortType: sortTypes.default
  }

  componentDidMount(){
    Api.get().then(json=>this.setState({stocks: json}))
  }

  buyStock = (stockToBuy) => {
    this.setState(prevState => {
      return {
        stocks: prevState.stocks.filter(stock => {
          return stock.id !== stockToBuy.id;
        }),
        portfolio: [ ...prevState.portfolio, stockToBuy]
      }
    });
  }

  sellStock = (stockToSell) => {
    this.setState(prevState => {
      return {
        stocks: [ ...prevState.stocks, stockToSell ],
        portfolio: prevState.portfolio.filter(stock => {
          return stock.id !== stockToSell.id;
        })
      }
    });
  }

  setSortType = (sortType) => {this.setState({sortType})}
  setFilterType = (filterType) => {this.setState({filterType})}

  filterAndSortStocks = () => {
    const sortedStocks = this.sortedStocks();
    const filteredStocks = this.filterStocks(sortedStocks);
    return filteredStocks;
  }

  sortedStocks = () => {
    switch (this.state.sortType){
      case 'Alphabetically':
        return [ ...this.state.stocks ].sort((a, b) => {
          return (a.ticker).localeCompare(b.ticker);
        })
      case 'Price':
        return [ ...this.state.stocks ].sort((a, b) => {
          return (a.price) - (b.price);
        })
      default:
        return this.state.stocks
    }
  }

  filterStocks = (stocks) => {
    if (this.state.filterType === filterTypes.all) {return stocks;}

    return stocks.filter(stock => {
      return stock.type === this.state.filterType;
    });
  }


  render() {
    const {portfolio} = this.state
    return (
      <div>
        <SearchBar setFilterType={this.setFilterType} setSortType={this.setSortType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.filterAndSortStocks()} buyStock={this.buyStock}/>

            </div>
            <div className="col-4">

              <PortfolioContainer portfolio={portfolio} sellStock={this.sellStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
