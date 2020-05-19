import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log(this.state.term);
    this.props.whenSubmitRunThis(this.state.term);
  };

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={(e) => this.onFormSubmit(e)}>
          <div className='field'>
            <label>Image Search</label>
            <input
              type='text'
              // React prefer Controlled element than Uncontrolled
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
