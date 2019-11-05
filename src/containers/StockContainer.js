import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    const stocks = this.props.stocks  
    // const stocks = [...this.props.stocks].sort((a,b)=> a.name > b.name ? 1 : -1)

    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
          stocks.map(stock => <Stock 
            key={stock.id} 
            stock={stock} 
            addProtfolio={this.props.addProtfolio}
            /> )
        }
      </div>
    );
  }

}

export default StockContainer;
