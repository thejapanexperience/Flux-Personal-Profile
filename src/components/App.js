import React from 'react';
import ProfileForm from './ProfileForm';
import ProfileList from './ProfileList';
import LikesList from './LikesList';
import ProfileImage from './ProfileImage';
import LikesImage from './LikesImage';
import LikesForm from './LikesForm';

import ProfileActions from '../actions/ProfileActions'
import LikesActions from '../actions/LikesActions'
import ProfileStore from '../stores/ProfileStore'
import LikesStore from '../stores/LikesStore'

const App = React.createClass({
  getInitialState() {
    return {
      profiles: ProfileStore.getAll(),
      likes: LikesStore.getAll()
    }
  },

  componentWillMount() {
    ProfileStore.startListening(this._onChange);
    LikesStore.startListening(this._onChange);
  },

  componentWillUnmount() {
    ProfileStore.stopListening(this._onChange);
    LikesStore.stopListening(this._onChange);
  },

  _onChange() {
    this.setState({ profiles: ProfileStore.getAll(), likes: LikesStore.getAll() })
  },

  addProfile(newProfile) { 
    ProfileActions.createProfile(newProfile);
  },

  addLikes(newLikes) { 
    LikesActions.createLikes(newLikes);
  },

  render() {
    let { profiles, likes } = this.state;

    return (
      <div className='container'>
      <div id="header" className="header">
        <h1 id="title" >My Profile</h1>
        <br/><br/></div>
        <h3 id="profile">Input Profile Info Below</h3>

        <ProfileForm addProfile={this.addProfile}/>       
        <hr/>
        <hr/>
        <div className="container">
        <div id="toprow" className="row">
        <ProfileImage profiles={profiles} /> 
        <ProfileList profiles={profiles} /> </div></div>
        <br/>
        <br/>
        <div className="container">
        <div id="bottomrow" className="row">
        <LikesList likes={likes} />
        <LikesImage likes={likes} /> 
        </div></div>
        <h3 id="likes">Input Likes Below</h3>
        <LikesForm addLikes={this.addLikes} />
        </div>
    )
  }
})

export default App;
