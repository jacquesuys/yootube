import React, { Component } from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  onInputChange (event) {
    this.setState({ term: event.target.value });
    console.log(this.state.term);
    return;
  }

  render() {
    return (
      <input placeholder="Search" value={this.state.term}
        onChange={(event) => this.setState({ term: event.target.value })} />
    );
  }
}

export default SearchBar;