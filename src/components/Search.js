import React, { Component } from "react";
import "bulma/css/bulma.css";

class Search extends Component {
  render() {
    return (
      <div>
        <input className="input search-bar" type="text" name="search" placeholder="Search"
          value={this.props.search}
          onChange={this.props.onChange}
        />
      </div>
    )
  }
}

export default Search;
