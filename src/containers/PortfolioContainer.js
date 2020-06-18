import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    return (
      <div>
        <h2>My Portfolio</h2>
          
          {this.props.ownedStocks.map(stock => <Stock {...stock} key={stock.id} buyStock={this.props.buyStock}/>)}

      </div>
    );
  }

}

export default PortfolioContainer;
