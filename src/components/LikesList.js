import React from 'react';

const LikesList = props => {
  const { likes } = props;
  console.log('likes list likes', likes)

  return (
    <div id="likesInfo" className="container col-sm-6">
      {likes.map((like) => (
      <div key={likes.id}>
        <p >{like.like}</p>
        <p >{like.tv}</p>
        <p >{like.place}</p>
        <p >{like.person}</p>
      </div>
      ))}
    </div>
  )
}

export default LikesList;

