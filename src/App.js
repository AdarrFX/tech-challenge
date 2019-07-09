import React from 'react';
import './App.css';
import EventsPage from './EventsPage';
import GroupsPage from './GroupsPage';
import {
  Route,
  withRouter
} from 'react-router-dom'

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      searchText: "",
    }
  }

  handleSearch = (e) => {
    e.preventDefault();

    if(this.state.searchText !== ""){
      this.props.history.push(`/groups?search=${this.state.searchText}`);
    }

  }

  handleTextChange = (e) => {
    this.setState({
      searchText: (e.target.value).trim(),
    })
  }


  render() {

    return (
      <div className="wrapper">
        <header>
          <p>Achievers Interview Home Project</p>
        </header>
        <section>
          <h1>Meetup.com Event Search!</h1>
          <form>
            <label className="search-input-label" htmlFor="search">Enter Group Search Term:</label>
            <input className="search-input-box" onChange={this.handleTextChange} type="text" name="search" />
            <button className="search-button" onClick={this.handleSearch}>Search for Groups</button>
          </form>
        </section>
        
          <Route path="/groups" component={GroupsPage} />
          <Route path="/group/:urlname" component={EventsPage} />
        
        <footer>
          <p>Copyright Adam Pachulski</p>
        </footer>
      </div>
    );
  }

}

export default withRouter(App);
