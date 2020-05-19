import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

// unsplash API ( unsplash.com/developers )
// https://api.unsplash.com/
// GET /search/photos
// Authorization
// access key ( RwmHXGt72v7lqBPyHRnAAu-ix4B4lSbBq3b1NubFtyQ )

class App extends React.Component {
  state = { images: [] };
  // later on we can use map function with array

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    // moved header to unsplash.js file
    // and import unsplash
    // remove axios and change to unsplash
    // so you don't have to import axios in this file any more

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
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
