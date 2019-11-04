import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    const { portfolio, stocks, sellStock } = this.props
    return (
      <div>
        <h2>My Portfolio</h2>
        {
          portfolio.map(port => (
            <Stock stock={stocks.find(stock => stock.id === port)} handleClick={() => sellStock(port)} key={port} />
          ))
        }
      </div>
    );
  }

}

export default PortfolioContainer;
