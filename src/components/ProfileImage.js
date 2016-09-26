import React from 'react';

const ProfileImage = props => {
  const { profiles } = props;
  console.log('ProfileImage profiles ,',profiles)

  return (
      <div className="container col-sm-6">
      {profiles.map((profile) => (        
        <div  key={profile.id}>
          <img className="img-responsive img-thumbnail" height="500px" src={profile.url} alt=""/>
        </div>
        ))}
      </div>
      )
}

export default ProfileImage;
