import React from 'react';

export class Location extends React.Component {

  render() {

    const { switchBrowsing } = this.props;

    return(

      <div className="container location-links">
        <div className="location-link">
          <p onClick={() => switchBrowsing("homepage")}>Home</p> / {this.props.selectedCategory}
        </div>
      </div>

    );
  }
};
