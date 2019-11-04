import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
import API from '../helpers/API'

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sort: "Default",
    filter: "All"
  }

  componentDidMount() {
    API.get()
      .then(stocks => this.setState({ stocks }))
  }

  buyStock = (stockID) => {
    this.state.portfolio.includes(stockID) ? null :
      this.setState({ portfolio: [...this.state.portfolio, stockID] })
  }

  sellStock = (stockID) => {
    const newPortfolio = this.state.portfolio.filter(stock => stock !== stockID)
    this.setState({ portfolio: newPortfolio })
  }

  setSort = (sort) => {
    this.setState({ sort })
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  sortStocks = (stocks, sort) => {
    if (sort === "Default") return stocks
    return [...stocks].sort((a, b) => {
      if (sort === "Alphabetically") return a.name.localeCompare(b.name)
      if (sort === "Price") return b.price - a.price
    })
  }

  render() {

    const { stocks, portfolio, sort, filter } = this.state
    const { buyStock, sellStock, setSort, setFilter } = this
    const sortedStocks = filter === "All" ? this.sortStocks(stocks, sort) : this.sortStocks(stocks, sort).filter(stock => stock.type === filter)

    return (
      <div>
        <SearchBar setSort={setSort} {...{ sort, filter }} setFilter={setFilter} />

        <div className="row">
          <div className="col-8">

            <StockContainer {...{ sortedStocks, buyStock }} />

          </div>
          <div className="col-4">

            <PortfolioContainer {...{ stocks, portfolio, sellStock }} />

          </div>
        </div>
      </div>
    );
  }

}

export default MainContainer;
