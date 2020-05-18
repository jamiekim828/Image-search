import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className='ui segment'>
        <form className='ui form'>
          <div className='field'>
            <label>Image Search</label>
            <input text='text' />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
