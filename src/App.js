import React from 'react';
import './App.css';
import EventsPage from './EventsPage';
import GroupsPage from './GroupsPage';
import {
  BrowserRouter as Router,
  Route,
  withRouter
} from 'react-router-dom'

// import queryString from 'query-string'

// const GroupsPage = (props) => {
//   const { search } = props.location
//   const query = queryString.parse(search)

//   return <div>
//     <p>Groups Page: {query.q}</p>
//     <div className="group-results-container">
//               {this.state.exampleGroupResponse.map((group) => {
//                 return <Link to={`/group/${group.id}`}><GroupResult thumbnailImage={group.organizer.photo.thumb_link} groupName={group.name} memberCount={group.members} city={group.localized_location} country={group.localized_country_name} /></Link>
//               })}
//             </div>
//   </div>
// }

const GroupDetailsPage = (props) => {
  const { match } = props
  const { id } = match.params

  return <div>
    <p>Group Details: {id}</p>
  </div>
}

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      searchText: "",
    }
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.props.history.push(`/groups?search=${this.state.searchText}`);
  }

  handleTextChange = (e) => {
    this.setState({
      searchText: e.target.value,
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
            <input onChange={this.handleTextChange} type="text" name="search" />
            <button onClick={this.handleSearch}>Search for Groups</button>
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
