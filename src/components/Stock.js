import React from 'react'

const Stock = (props) => {
  
  return(
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{
              props.stockData ? props.stockData.name : props.userStock ? props.userStock.name : null
            }</h5>
          <p className="card-text">{
              props.stockData ? props.stockData.price : props.userStock ? props.userStock.price : null
            }</p>{ props.stockData ? 
          <button onClick={() => props.buyStock(props.stockData)} className="card-button">
              Buy stock
            </button>
            :
            props.userStock ?
            <button onClick={() => props.sellStock(props.userStock)} className="card-button">
              Sell stock
            </button>
            :
            null
            }
        </div>
      </div>

    </div>
  )
};

export default Stock
