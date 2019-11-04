import React from 'react'

const Stock = (props) => {
  
  const {ticker, name, price} = props.stock

  return(
    <div className="card" onClick={() => props.handleClick(props.stock)}>
      <div className="card-body">
        <h5 className="card-title">
          {name}
        </h5>
        <p className="card-text">
          {ticker}: {price}
        </p>
      </div>
    </div>  
  )


}

export default Stock
