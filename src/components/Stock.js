import React from 'react'
import { deepStrictEqual } from 'assert'


class  Stock extends React.Component{

render (){
  

  return(
   

  <div>
    {/* if the stock is in the bought stock then remove this stock else buy the stock */}

    <div className="card" onClick = { () => this.props.buyStock ? this.props.buyStock(this.props.stock) :this.props.removeStock(this.props.stock) }>
      <div className="card-body">
        <h5 className="card-title">{
            this.props.stock.name
          }</h5>
        <p className="card-text">{
           this.props.stock.price
          }</p>
      </div>
    </div>


  </div>
)

  
}};

export default Stock
