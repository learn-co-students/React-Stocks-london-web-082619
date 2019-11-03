import React, { Component } from 'react';
import API from "../adapters/API"
import { sortTypes, columnHeadings, filterTypes } from "../settings"
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
    sortType: sortTypes.default,
    filterType: filterTypes.all,
    portfolio: []
  }

  componentDidMount() {
    API.getStocks()
      .then(stocks => this.setState({ stocks }))
      .catch(console.error);
  }

  render() {
    return (
      <div>
        <SearchBar
          sortType={this.state.sortType}
          setSortType={this.setSortType}
          setFilterType={this.setFilterType}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                heading={columnHeadings.stocks}
                stocks={this.filterAndSortStocks()}
                callback={this.buyStock}
              />

            </div>
            <div className="col-4">

              <StockContainer
                heading={columnHeadings.portfolio}
                stocks={this.state.portfolio}
                callback={this.sellStock}
              />

            </div>
          </div>
      </div>
    );
  }

  filterAndSortStocks = () => {
    const sortedStocks = this.getSortedStocks();
    const filteredStocks = this.filterStocks(sortedStocks);
    return filteredStocks;
  }

  setSortType = sortType => {
    this.setState({ sortType });
  }

  getSortedStocks = () => {
    if (this.state.sortType === sortTypes.default) {
      return this.state.stocks;
    } else if (this.state.sortType === sortTypes.alpha) {
      return this.getStocksByTicker()
    } else if (this.state.sortType === sortTypes.price) {
      return this.getStocksByPrice();
    }
  }

  getStocksByTicker = () => {
    return [ ...this.state.stocks ].sort((a, b) => {
      return (a.ticker).localeCompare(b.ticker);
    });
  }

  getStocksByPrice = () => {
    return [ ...this.state.stocks ].sort((a, b) => {
      return a.price - b.price;
    });
  }

  setFilterType = filterType => {
    this.setState({ filterType })
  }

  filterStocks = stocks => {
    if (this.state.filterType === filterTypes.all) {
      return stocks;
    } else {
      return stocks.filter(stock => {
        return stock.type === this.state.filterType;
      });
    }
  }

  buyStock = stockToBuy => {
    this.setState(prevState => {
      return {
        stocks: prevState.stocks.filter(stock => {
          return stock.id !== stockToBuy.id;
        }),
        portfolio: [ ...prevState.portfolio, stockToBuy]
      }
    });
  }

  sellStock = stockToSell => {
    this.setState(prevState => {
      return {
        stocks: [ ...prevState.stocks, stockToSell ],
        portfolio: prevState.portfolio.filter(stock => {
          return stock.id !== stockToSell.id;
        })
      }
    });
  }

}

export default MainContainer;
