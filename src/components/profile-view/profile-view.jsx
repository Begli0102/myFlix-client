import React from 'react';
import ProfileInfo from './profile-info/profile-info';
// import FavouriteMovie from './favourite-movie/favourite-movie';


import './profile-view.scss';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export class ProfileView extends React.Component{

  render(){

    const{user,onLoggedOut,movies} = this.props;

    return(
      
        <div className="mb-5">
          <Tabs defaultActiveKey="favouriteMovie">
            <Tab eventKey="favouriteMovie" title="Favourite Movie">
              {/* <FavouriteMovie
                userInfo={userInfo}
                movies={movies}
              /> */}
            </Tab>
            <Tab eventKey="profile" title="Profile">
              <ProfileInfo
                user={user}
                onLoggedOut={onLoggedOut}
                movies={movies}
              />
            </Tab>
          </Tabs>
        </div>
    );
  }
}
