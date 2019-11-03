import React from 'react'

const Stock = ({stock, callback}) => {
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

Stock.defaultProps = {
  stock: {
    name: "Stock name not found",
    price: "Stock price not found"
  },
  callback: () => console.error("Missing stock callback")
}

export default Stock
