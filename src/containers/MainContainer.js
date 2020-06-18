import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'


class MainContainer extends Component {
  state ={
    stocks: [],
    protfolioStocks: [],
    displayStocks: []
  }

  fetchStocks = () =>{
    fetch('http://localhost:3000/stocks').then(res => res.json()).then(data => this.setState({stocks: data, displayStocks: data}))
  }

  componentDidMount(){
    this.fetchStocks()
  }

  addProtfolio = (stock) =>{
    this.setState({protfolioStocks: [...this.state.protfolioStocks, stock]})
  }

  removeStock = (stock) => {
    this.setState({
      protfolioStocks: this.state.protfolioStocks.filter(stockD => stockD !== stock)
    })
  }

  sortStocks = () =>{
    
    const sortedStoks = [...this.state.displayStocks].sort((a,b)=> a.name > b.name ? 1 : -1)
    this.setState({displayStocks: sortedStoks})
  }

  sortByPrice = (e) =>{

    const sortPrice = [...this.state.displayStocks].sort((a,b)=> a.price > b.price ? 1:-1)
    this.setState({ displayStocks: sortPrice})
  }

  typeFilter = (event) =>{
    let stocks = this.state.stocks.filter(stock => stock.type === event.target.value)
    console.log(event.target.value)
    this.setState({displayStocks: stocks})
  }
  render() {
    return (
      <div>
        <SearchBar sortStocks={this.sortStocks} sortByPrice={this.sortByPrice} typeFilter={this.typeFilter} />

          <div className="row">
            <div className="col-8">

              <StockContainer stocks={this.state.displayStocks} addProtfolio={this.addProtfolio}/>

            </div>
            <div className="col-4">

              <PortfolioContainer stocks={this.state.protfolioStocks} removeStock={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
