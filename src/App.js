import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

class App extends Component {

  state ={
    stocks : [],
    boughtStock: []

  }

  componentDidMount(){
    return fetch("http://localhost:3000/stocks").then(resp=>resp.json()).then(stockData =>
    this.setState({
      stocks: stockData
      
    })
    
    )
  }

  buyStock = (stock) => {

    this.setState({
      boughtStock: [...this.state.boughtStock, stock ]

    })

  }

  filterStock = (event) => {
    
    // this.componentDidMount()
    console.log(newStockArray)

    let newStockArray = this.state.stocks.filter(stock => stock.type === event.target.value)
    // debugger
    this.setState({

      stocks: newStockArray
    })


  }


  removeStock = (stock) => {

 this.state.boughtStock.filter(stocks => stocks !== stock)



  

  }
  
  displayAlphabetically = (event) => {

    // console.log(this.state.stocks.sort((a, b) => a.name.localeCompare(b.name)))
    this.setState({
      stocks: this.state.stocks.sort((a, b) => a.name.localeCompare(b.name))
    })
    

  }

  displayByPrice = (event) => {
    // event.target.reset()
     this.setState({

      stocks: this.state.stocks.sort((a, b) => b.price - a.price)
     })

  }
  render() {
    return (
      <div>
        <Header/>
        <MainContainer stocks = {this.state.stocks} buyStock = {this.buyStock} boughtStock ={this.state.boughtStock} removeStock = {this.removeStock}
        displayAlphabetically = {this.displayAlphabetically} displayByPrice = {this.displayByPrice} filterStock= {this.filterStock}
        />
      </div>
    );
  }
}

export default App;
