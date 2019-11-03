import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>{this.props.heading}</h2>
        {this.props.stocks.map(stock => {
          return(
            <Stock
              key={stock.id}
              stock={stock}
              callback={this.props.callback}
            />
          ) 
        })}
      </div>
    );
  }

}

export default StockContainer;
