import React, { Component } from 'react';

// import Header from '../components/Header';
import Header from '../functionalComponents/Header';

class ProfileEdit extends Component {
  render() {
    return (
      <div>
        <Header />
        <div data-testid="page-profile-edit">Profile Edit</div>
      </div>
    );
  }
}

export default ProfileEdit;
