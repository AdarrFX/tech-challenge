import React from 'react';
import './App.css';
import EventsPage from './EventsPage';
import GroupsPage from './GroupsPage';
import {
  Route,
  withRouter
} from 'react-router-dom';

class App extends React.Component {
  constructor () {
    super();

    this.state = {
      searchText: ''
    };

    // Bind functions so React likes them
    this.handleSearch = this.handleSearch.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  // Handles the search button being clicked
  handleSearch (e) {
    e.preventDefault();

    // ensure that the search field isn't empty
    if (this.state.searchText !== '') {
      // insert the search query into browser back history so that someone can access the search directly later
      this.props.history.push(`/groups?search=${this.state.searchText}`);
    }
  }

  // Handles the text input changing every time a letter is typed
  handleTextChange (e) {
    // Sets the state of the searchText input and trims off leading or trailing whitespace
    this.setState({
      searchText: (e.target.value).trim()
    });
  }

  render () {
    return (
      <div className='wrapper'>
        <header>
          <p>Achievers Interview Home Project</p>
        </header>
        <section>
          <h1>Meetup.com Event Search!</h1>
          <form>
            <label className='search-input-label' htmlFor='search'>Enter Group Search Term:</label>
            <input className='search-input-box' onChange={this.handleTextChange} type='text' name='search' />
            <button className='search-button' onClick={this.handleSearch}>Search for Groups</button>
          </form>
        </section>

        <Route path='/groups' component={GroupsPage} />
        <Route path='/group/:urlname' component={EventsPage} />

        <footer>
          <p>Copyright Adam Pachulski</p>
        </footer>
      </div>
    );
  }
}

export default withRouter(App);
