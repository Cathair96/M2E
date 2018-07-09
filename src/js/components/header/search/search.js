import React from 'react';

export class Search extends React.Component {

  render() {

    filterUpdate() {
      const val = this.myValue.value
      this.props.filterUpdate(val)
    }

    return(

      <div className="container">
        <form>
          <input
            type="text"
            ref={ (value) => {this.myValue = value}}
            placeholder="Search"
            onChange={this.filterUpdate.bind(this)}/>
        </form>
      </div>

    )
  }
}
