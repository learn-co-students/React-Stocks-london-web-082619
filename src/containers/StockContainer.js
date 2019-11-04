import React, { Component } from 'react';
import Stock from '../components/Stock'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
          {this.props.stocks.map(stock => {
              if(this.props.currentFilter === "All"){
                return <Stock {...stock} key={stock.id} buyStock={this.props.buyStock}/>        
                }
              else if(stock.type === this.props.currentFilter){
                return <Stock {...stock} key={stock.id} buyStock={this.props.buyStock}/>
                }
            })}
        </div>
    );
  }

}

export default StockContainer;
