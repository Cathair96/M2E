import React from 'react';

import { Categories } from './categories';

export class NavBar extends React.Component {

	returnHome() {
		const root = window.location.origin;
		window.location.href = root;
	}


	render() {
		const { switchBrowsing, toggleMobileNav } = this.props;

		return(
			<div className="navbar">
				<nav className="desk">
					<div className="container flex-row">
						<div className="logo" onClick={() => switchBrowsing("homepage")}>
							<h2>M<span className="blue-span">2</span>E</h2>
						</div>
						<Categories
							setCategory={this.props.setCategory}/>
							<div className="cart" onClick={() => switchBrowsing("basket")}>
								<i className="material-icons shopping-cart">shopping_cart</i>
							</div>
					</div>
				</nav>
				<nav className="mobile">
					<div className="container flex-row">
						<div className="logo" onClick={() => switchBrowsing("homepage")}>
							<h2>M<span className="blue-span">2</span>E</h2>
						</div>
						<div className="cart" onClick={() => switchBrowsing("basket")}>
							<p>Basket</p>
						</div>
						<div className="hamburger-icon" onClick={() => toggleMobileNav()}>
							<div className="hamburger-line"></div>
							<div className="hamburger-line"></div>
							<div className="hamburger-line"></div>
						</div>
					</div>
					{
						this.props.mobileNav ?
						<Categories
							setCategory={this.props.setCategory}/>
						: null
					}
				</nav>
			</div>
		);
	}
};
