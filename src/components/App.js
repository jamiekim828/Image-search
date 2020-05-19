import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

// unsplash API ( unsplash.com/developers )
// https://api.unsplash.com/
// GET /search/photos
// Authorization
// access key ( RwmHXGt72v7lqBPyHRnAAu-ix4B4lSbBq3b1NubFtyQ )

class App extends React.Component {
  state = { images: [] };
  // later on we can use map function with array

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID RwmHXGt72v7lqBPyHRnAAu-ix4B4lSbBq3b1NubFtyQ',
      },
    });
    //   .then((response) => {
    //     console.log(response.data.results);
    //   })
    console.log(response.data.results);
    console.log(this);

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className='ui container' style={{ marginTop: '10px' }}>
        <SearchBar
          whenSubmitRunThis={this.onSearchSubmit}
          guessWhatIam='I am props object'
        />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
