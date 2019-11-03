import React, { PureComponent } from 'react'

class Stock extends PureComponent {
  
  render() {
    const stock = this.props.stock;
    const callback = this.props.callback;

    return (
      <div>
        <div className="card" onClick={() => callback(stock)}>
          <div className="card-body">
            <h5 className="card-title">{stock.name}</h5>
            <p className="card-text">{stock.price}</p>
          </div>
        </div>
      </div>
    );
  }
}

Stock.defaultProps = {
  stock: {
    name: "Stock name not found",
    price: "Stock price not found"
  },
  callback: () => console.error("Missing stock callback")
}

export default Stock;