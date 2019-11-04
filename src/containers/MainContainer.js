import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  constructor() {
    super()
    this.state = {
      stocks: [],
      portfolio: [],
      display: []
    }
  }
  

  // let API = "http://localhost:3003/stocks"

  componentDidMount() {
    fetch("http://localhost:3003/stocks")
    .then(resp => resp.json())
    .then(stocksData => this.setState({
      stocks: stocksData,
      display: stocksData
    }))
  }

addToPortfolio = (stock) => {
this.setState({
  portfolio: [...this.state.portfolio, stock]
})
  }

  removeFromPortfolio = (stock) => {
    this.setState({
      portfolio: this.state.portfolio.filter(s => s !== stock) 
    })
  }

  sortStocks = (sortBy) => {
    let sortedStocks = []
    switch(sortBy) {
      case "Alphabetically":
          sortedStocks = this.state.display.sort((a,b) => a.name > b.name ? 1: -1)
        break;
        case "Price":
            sortedStocks = this.state.display.sort((a,b) => a.price > b.price ? 1 : -1)
          break;
    }
    this.setState({
      display: sortedStocks
    })
  }

  render() {
    return (
      <div>
        <SearchBar sort={this.sortStocks}/>

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.display} add={this.addToPortfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.portfolio} remove={this.removeFromPortfolio}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
