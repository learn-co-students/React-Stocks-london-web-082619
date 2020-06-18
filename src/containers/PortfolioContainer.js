import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    let stocks = this.props.stocks
    return (
      <div>
        <h2>My Portfolio</h2>
          {
            //render your portfolio stocks here
            stocks.map(stock => <Stock key={stock.id}
            stock={stock} 
            removeStock={this.props.removeStock}/> )

          }
      </div>
    );
  }

}

export default PortfolioContainer;
