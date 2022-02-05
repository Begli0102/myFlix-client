import React from "react";
import ProfileInfo from "./profile-info/profile-info";
import FavouriteMovie from "./favourite-movie/favourite-movie";
import axios from "axios";

import "./profile-view.scss";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

export class ProfileView extends React.Component {
  constructor() {
    super();
    this.state = {
      user: null,
      favoriteMovies: [],
    };
  }
  componentDidMount = () => {
    this.getUser();
  };
  getUser = () => {
    let token = localStorage.getItem("token");
    axios
      .get(`https://myflix01025.herokuapp.com/users/${this.props.user}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        // Filter out favorite movies based on movies props
        const favMovies = this.props.movies.filter((item) => {
          return response.data.FavoriteMovies.includes(item._id);
        });
        // Assign the result to the state
        this.setState({
          user: response.data,
          favoriteMovies: favMovies,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  render() {
    const { favoriteMovies } = this.state;
    const { onLoggedOut } = this.props;
    return (
      <div className="mb-5">
        <Tabs defaultActiveKey="favouriteMovie">
          <Tab eventKey="favouriteMovie" title="Favourite Movie">
            {favoriteMovies.length > 0 ? (
              <FavouriteMovie favoriteMovies={favoriteMovies} />
            ) : (
              <div>No favorite movies yet</div>
            )}
          </Tab>
          <Tab eventKey="profile" title="Profile">
            <ProfileInfo user={this.state.user} onLoggedOut={onLoggedOut} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}
