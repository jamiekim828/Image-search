import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// unsplash API ( unsplash.com/developers )
// https://api.unsplash.com/
// GET /search/photos
// Authorization
// access key ( RwmHXGt72v7lqBPyHRnAAu-ix4B4lSbBq3b1NubFtyQ )

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID RwmHXGt72v7lqBPyHRnAAu-ix4B4lSbBq3b1NubFtyQ',
      },
    });
  }
  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar whenSubmitRunThis={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
