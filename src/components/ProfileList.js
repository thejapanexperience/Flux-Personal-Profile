import React from 'react';

const ProfileList = props => {
  const { profiles } = props;
  console.log('profile list profiles', profiles)

  return (
    <div id="profileInfo" className="container col-sm-6">
      {profiles.map((profile) => (
      <div key={profile.id}>
        <p >{profile.name}</p>
        <p >{profile.age}</p>
        <p >{profile.location}</p>
        <p >{profile.profession}</p>
      </div>
      ))}
    </div>
  )
}

export default ProfileList;

