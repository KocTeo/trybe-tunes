import React, { Component } from 'react';

// import Header from '../components/Header';
import Header from '../functionalComponents/Header';

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="page-profile">Profile</div>
      </div>
    );
  }
}

export default Profile;
