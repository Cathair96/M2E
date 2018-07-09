import React from 'react';

import { NavBar } from './nav/nav';
import { Location } from '../content/location';

export class Header extends React.Component {

  render() {

    return(
      <div className="header">
        <NavBar
         setCategory={this.props.setCategory}
         switchBrowsing={this.props.switchBrowsing}
         mobileNav={this.props.mobileNav}
         toggleMobileNav={this.props.toggleMobileNav}/>
         <section className="infobar flex">
          <p>GET &pound;5 OFF - ENTER "SUMMERDISCOUNT" AT CHECKOUT</p>
         </section>
         <div className="location-bar">
          {this.props.location ? <Location selectedCategory={this.props.selectedCategory} switchBrowsing={this.props.switchBrowsing}/> : null}
         </div>
      </div>
    );
  }
};
