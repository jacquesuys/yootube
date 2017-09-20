import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDqRwij5jGhFRwd53MC7MlvNWTWN0QLTe0';

const App = () => <SearchBar />;

ReactDOM.render(<App />, document.querySelector('.container'));