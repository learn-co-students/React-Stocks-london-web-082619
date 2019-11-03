import React, { Component } from 'react';
import API from "../adapters/API"
import { sortTypes, columnHeadings, filterTypes } from "../settings"
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {
  state = {
    stocks: [],
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
          sortStocks={this.sortStocks}
          filterStocks={this.setFilterType}
        />

          <div className="row">
            <div className="col-8">

              <StockContainer
                heading={columnHeadings.stocks}
                stocks={this.filterStocks()}
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

  sortStocks = sortType => {
    if (sortType === sortTypes.alpha) {
      this.sortStocksByTicker()
    } else if (sortType === sortTypes.price) {
      this.sortStocksByPrice();
    }
  }

  sortStocksByTicker = () => {
    this.setState({ stocks: [ ...this.state.stocks ].sort((a, b) => {
      return (a.ticker).localeCompare(b.ticker);
    })});
  }

  sortStocksByPrice = () => {
    this.setState({ stocks: [ ...this.state.stocks ].sort((a, b) => {
      return a.price - b.price;
    })});
  }

  setFilterType = filterType => {
    this.setState({ filterType })
  }

  filterStocks = () => {
    if (this.state.filterType === filterTypes.all) {
      return this.state.stocks;
    } else {
      return this.state.stocks.filter(stock => {
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
