import React from 'react';

export class Basket extends React.Component {

  whatsProps() {
    const val = this.myValue.value;
    this.props.checkDiscount(val)
  }

  removeFromBasket(i) {
    const product = this.props.basket[i];
    this.props.removeFromBasket(product);
  }

  render() {

    const { basket, discountCode, discountAmount, purchase } = this.props;
    const basketList = basket.map((item, i) => {
      return(
        <div key={i} className="basket-item clearfix">
          <img className="basket-item-image" src={item.productImage} alt={item.productName}/>
          <div className="basket-item-info">
            <h3 className="basket-item-title">{item.productName}</h3>
            <p className="basket-item-price">&pound;{item.productPrice}</p>
            <p className="basket-item-category">{item.productCategory}</p>
          </div>
          <div className="remove-item">
            <h3 onClick={() => this.removeFromBasket(i)}>X</h3>
          </div>
        </div>
      )
    })

    let subTotal = null;
    for (let i = 0; i < basket.length; i++) {
      subTotal += basket[i].productPrice;
    }

    const totalPrice = subTotal - discountAmount;

    return(

      <div className="container basket">
        <div className="basket-contents">
          {basketList}
        </div>
        <div className="checkout-area">
          <h3>Sub Total:</h3><p>&pound;{subTotal}</p>
          <div className="enter-discount">
            <input
              type="text"
              ref={ (value) => {this.myValue = value}}
              placeholder="Enter discount code..."/>
            <button onClick={() => this.whatsProps()}>Submit</button>
            <h3>Discount: &pound;{discountAmount}</h3>
          </div>
          <div className="checkout">
            <h2>Total Price: &pound;{totalPrice}</h2>
            <button onClick={() => purchase()}>Checkout</button>
          </div>
        </div>
      </div>
    )
  }
}
