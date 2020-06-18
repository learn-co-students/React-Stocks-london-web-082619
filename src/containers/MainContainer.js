import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

const STOCKS_URL = "http://localhost:3000/stocks"

class MainContainer extends Component {

  state = {
    stocks: [],
    portfolio: [],
    sortType: "", 
    filter: "All"
  }

  componentDidMount(){
    this.getStocks().then(this.updateStateWithStocks)
  }

  getStocks = () => {
    return fetch(STOCKS_URL).then(resp => resp.json())
  }

  updateStateWithStocks = (stocks) => {
    this.setState({
      stocks
    })
  }

  addToPortfolio = (stock) => {
    if (this.state.portfolio.includes(stock)) return
    this.setState({
      portfolio: [
        ...this.state.portfolio, 
        stock
      ]
    })
  }

  removeFromPortfolio = (stock) => {
    debugger
  }

  updateFilter = (event) => {
    this.setState({
      filter: event.target.value
    })
  }

  updateSortType = (event) => {
    this.setState({
      sortType: event.target.value
    })
    console.log(this.state.sortType)
  }

  filterStocks = (stocks) => {
    if (this.state.filter !== "All"){
      return stocks.filter(stock => stock.type === this.state.filter)
    } else {
      return stocks
    }
  }

  sortStocks = (filteredStocks, sortType) => {

    if (sortType == "") return filteredStocks

    return [...filteredStocks].sort((a, b) => {
      if (sortType === "Alphabetically") return a.name.localeCompare(b.name)
      if (sortType === "Price") return b.price - a.price
    })
  }

  render() {
    const filteredStocks = this.filterStocks(this.state.stocks);
    const stocksToRender = this.sortStocks(filteredStocks, this.state.sortType)

    return (
      <div>
        <SearchBar updateFilter={this.updateFilter} updateSortType={this.updateSortType}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={stocksToRender} handleClick={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} handleClick={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
