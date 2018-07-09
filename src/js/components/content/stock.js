import React from 'react';

import stock from '../../data/productStock';

export class StockDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      stock: this.props.stock
    }
  }

  render() {

    const stock = this.state.stock;
    const { selectedCategory, addToBasket } = this.props;
    const stockList = stock
      .filter(stock => {
        return stock.productCategory.indexOf(selectedCategory) > -1
      })
      .map((stock, i) => {
        return(
          <div key={i} className="item-wrapper">
            <div className="item-image-wrapper" onClick={ () => addToBasket(stock)}>
              <img className="item-image" alt={stock.productName} src={stock.productImage}/>
            </div>
            <div className="item-description">
              <div className="item-title">
                <h3>{stock.productName}</h3>
              </div>
              <div className="item-price">
                <p>&pound;{stock.productPrice}</p>
              </div>
            </div>
          </div>
        );
    })

    return(
      <div className="stock-wrapper container">
        {stockList}
      </div>
    )
  }
}
