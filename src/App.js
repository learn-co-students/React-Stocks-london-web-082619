import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import API from './adapters/API'

class App extends Component {

  state = {
    stocks: [],
    userStocks: [],
    sortType: "Alphabetically",
    filterType: "All"
  }

  componentDidMount() {
    API.getStocks().then(stocks => this.setState({ stocks }))
  }

  buyStock = stockData => {
    const newStock = {...stockData}
    newStock.id = newStock.id * 10000000 + this.state.userStocks.length + 1
    this.setState({
      userStocks: [
        ...this.state.userStocks,
        newStock
      ]
    })
  }

  sellStock = userStock => {
    const remainingStocks = this.state.userStocks.filter(stock => !(stock.id === userStock.id))

    this.setState({
      userStocks: [
        ...remainingStocks
      ]
    })
  }

  setSort = event => {
    this.setState({
      sortType: event.target.value
    })
  }

  sortStocks = (stocksList, sortType) => {
    return [...stocksList].sort((a, b) => {
      if(sortType === "Alphabetically") return a.name.localeCompare(b.name)
      if(sortType === "Price") return a.price - b.price
    })
  }

  setType = event => {
    this.setState({
      filterType: event.target.value
    })
  }

  filterStocks = (stocksList, filterType) => {
    if(filterType === "All") return stocksList
    if(filterType === "Tech") return stocksList.filter(stock => stock.type === "Tech")
    if(filterType === "Sportswear") return stocksList.filter(stock => stock.type === "Sportswear")
    if(filterType === "Finance") return stocksList.filter(stock => stock.type === "Finance")
  }

  render() {

    const sortedStock = this.sortStocks(this.state.stocks, this.state.sortType)
    const stocksToRender = this.filterStocks(sortedStock, this.state.filterType)

    return (
      <div>
        <Header/>
        <MainContainer stocks={stocksToRender}
                       buyStock={this.buyStock}
                       userStocks={this.state.userStocks}
                       sellStock={this.sellStock}
                       setSort={this.setSort}
                       setType={this.setType}/>
      </div>
    );
  }
}

export default App;
