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
    <div>
      <input placeholder="Search" value={this.state.term}
        onChange={(event) => this.setState({ term: event.target.value })} />
      {this.state.term}
    </div>
  );
  }
}

export default SearchBar;