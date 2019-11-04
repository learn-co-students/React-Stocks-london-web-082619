import React from 'react'

const Stock = ({id, ticker, name, type, price, buyStock}) => (
  <div>

    <div className="card">
      <div className="card-body" onClick={() => buyStock(id)}>
        <h5 className="card-title" >{
            name
          }</h5>
        <p className="card-text">{
            ticker+' '+price
          }</p>
      </div>
    </div>


  </div>
);

export default Stock
