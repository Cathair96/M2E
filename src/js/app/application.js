import React from 'react';

import stock from '../data/productStock';

import { Header } from '../components/header/header';
import { Location } from '../components/content/location';
import { StockDisplay } from '../components/content/stock';
import { Basket } from '../components/content/basket';
import { Footer } from '../components/footer/footer';

class Application extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      stock: stock,
      selectedCategory: "",
			location: false,
			isBrowsing: true,
			basket: [],
			discountCode: "SUMMERDISCOUNT",
			isDiscount: false,
			discountAmount: 0,
			mobileNav: false
    }
		this.setCategory = this.setCategory.bind(this)
		this.toggleMobileNav = this.toggleMobileNav.bind(this)
		this.switchBrowsing = this.switchBrowsing.bind(this)
		this.addToBasket = this.addToBasket.bind(this)
		this.removeFromBasket = this.removeFromBasket.bind(this)
		this.checkDiscount = this.checkDiscount.bind(this)
		this.purchase = this.purchase.bind(this)
		this.findProduct = this.findProduct.bind(this)
  }

  setCategory(category) {
    this.setState({
			selectedCategory: category,
			location: true,
			isBrowsing: true,
			mobileNav: false
		})
  }

	toggleMobileNav() {
		let mobileNav = this.state.mobileNav;
		mobileNav = mobileNav ? false : true;
		this.setState({
			mobileNav: mobileNav
		})
	}

	switchBrowsing(mode) {
		if (mode == "homepage") {
			this.setState({
				isBrowsing: true,
				selectedCategory: "",
				location: false
			})
		} else if (mode == "basket") {
			this.setState({
				isBrowsing: false,
				location: false
			})
		}
	}

	addToBasket(item) {
		if (item.productStock > 0 ) {
			const basket = this.state.basket.concat(item);
			this.setState({
				basket: basket
			})
		}
	}

	removeFromBasket(product) {
		const basket = this.state.basket;
		const index = basket.indexOf(product);
		basket.splice(index, 1);
		this.setState({
			basket: basket
		})
	}

	checkDiscount(value) {
		const discountCode = this.state.discountCode;
		if (value == discountCode) {
			this.setState({
				isDiscount: true,
				discountAmount: 5
			})
		} else {
			this.setState({
				isDiscount: false,
				discountAmount: 0
			})
		}
	}

	findProduct(i) {
		const basket = this.state.basket;
		return basket[i];
	}

	purchase() {
		const stock = this.state.stock;
		const basket = this.state.basket;
		const isDiscount = this.state.isDiscount;
		const discountAmount = this.state.discountAmount;
		basket.forEach((item, index) => {
				const productIndex = stock.indexOf(this.findProduct(index));
				const product = stock[productIndex];
				if (product.productStock > 0) {
					product.productStock -= 1;
					this.setState({ stock: stock });
				} else {
					return
				}
		});
		this.setState({ basket: []});
		this.setState({ isDiscount: false, discountAmount: 0});
	}

	render() {

		return(

			<div className="application">
				<Header
					setCategory={this.setCategory}
					selectedCategory={this.state.selectedCategory}
					location={this.state.location}
					switchBrowsing={this.switchBrowsing}
					mobileNav={this.state.mobileNav}
					toggleMobileNav={this.toggleMobileNav}/>

				{

					this.state.isBrowsing ?
					<StockDisplay
						stock={this.state.stock}
						selectedCategory={this.state.selectedCategory}
						addToBasket={this.addToBasket}/>
					: null

				}

				{

					this.state.isBrowsing ?
					null :
					<Basket
						basket={this.state.basket}
						discountCode={this.state.discountCode}
						checkDiscount={this.checkDiscount}
						discountAmount={this.state.discountAmount}
						removeFromBasket={this.removeFromBasket}
						purchase={this.purchase.bind(this)}/>

				}

				<Footer/>
			</div>
		);
	}
};

export default Application;
