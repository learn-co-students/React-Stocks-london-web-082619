import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

const API = 'http://localhost:3000/stocks'

class App extends Component {

  state={
    stocks: [],
    ownedStocks: [],
    ownedStockIds: [],
    currentFilter: "All",
    alphabeticalSort: false,
    priceSort: false
  }

componentDidMount(){
  fetch(API)
  .then(resp => resp.json())
  .then(stocks => this.setState({stocks: stocks}))
}

buyStock = (id) => {
  if(this.state.ownedStockIds.includes(id)){
    let newIds = this.state.ownedStockIds.filter(stockId => stockId !== id)
      this.setState({ownedStockIds: newIds})
    let newArr = this.state.ownedStocks.filter(stock => stock.id !== id)
      this.setState({ownedStocks: newArr})
  }
  else{
    this.setState({ownedStockIds: [...this.state.ownedStockIds, id]})
  this.state.stocks.map(stock => {
    if(stock.id === id){
      this.setState({
        ownedStocks: [...this.state.ownedStocks, stock]
          })}
      })
  }
}

setFilter = (event) => {
    this.setState({
      currentFilter: event.target.value
    })
}

pressAlpha = () => {
  this.state.alphabeticalSort ? this.setState({alphabeticalSort: false}) : this.setState({alphabeticalSort: true})
}

pressPrice = () => {
  this.state.priceSort ? this.setState({priceSort: false}) : this.setState({priceSort: true})
}

  render() {
    return (
      <div>
        <Header/>
        <MainContainer
            stocks={this.state.stocks}
            ownedStocks={this.state.ownedStocks}
            buyStock={this.buyStock}
            setFilter={this.setFilter}
            currentFilter={this.state.currentFilter}
            pressAlpha={this.pressAlpha}
            pressPrice={this.pressPrice}
            alphabeticalSort={this.state.alphabeticalSort}
            priceSort={this.state.priceSort}
            />
      </div>
    );
  }
}

export default App;
