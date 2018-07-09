import React from 'react';

import categories from '../../../data/productCategories';

export class Categories extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: categories
    }
  }

  render() {

    const categories = this.state.categories;
    const navCategories = categories.map((category, i) => {
      return(
        <div key={i}>
          <h3 onClick={() => {this.props.setCategory(categories[i])}}>{category}</h3>
        </div>
      )
    })

    return(
      <div className="desk-mobile-nav">
        <div className="desk">
          <div className="menu flex-row">
            {navCategories}
          </div>
        </div>
        <div className="mobile">
          <div className="menu flex">
            {navCategories}
          </div>
        </div>
      </div>
    );
  }
};
