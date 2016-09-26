import React from 'react';

const LikesImage = props => {
  const { likes } = props;
  console.log('LikesImage likes ,',likes)

  return (
      <div className="container col-sm-6">
      {likes.map((like) => (        
        <div  key={like.id}>
          <img className="img-responsive img-thumbnail" height="500px" src={like.url} alt=""/>
        </div>
        ))}
      </div>
      )
}

export default LikesImage;
