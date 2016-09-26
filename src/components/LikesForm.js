import React from 'react';

const ProfileLikes = React.createClass({
  submitForm(e) {
    e.preventDefault();
    const { likeTV, likePlace, likePerson, likeSnes, likeURL } = this.refs;

    let newLikes = {
      tv: likeTV.value,
      place: likePlace.value,
      person: likePerson.value,
      url: likeURL.value,
      id: uuid(),
      like: 'likes:'

    }

    this.props.addLikes(newLikes);
  },


  render() {

    return (
      <div className="container col-sm-12">
      <form  className="form-group" onSubmit={this.submitForm}>
        <label htmlFor="likesForm">A TV show I like</label><span>  </span>
        <input ref='likeTV' type="text" defaultValue="Mr. Robot" required/> <span>  </span>
        <label htmlFor="likesForm">A place I like</label><span>  </span>
        <input ref='likePlace' type="text" defaultValue="Whitley Bay" required/><span>  </span> 
        <label htmlFor="likesForm">A person I like</label><span>  </span>
        <input ref='likePerson' type="text" defaultValue="Elia Miho Mands" required/><span>  </span>
        <label htmlFor="likesForm">A Picture I Like</label><span>  </span>
        <input ref='likeURL' type="text" defaultValue='https://scontent.fsnc1-2.fna.fbcdn.net/v/t1.0-9/13876130_10157283028280080_8092561280465515012_n.jpg?oh=8cf48ed185eebd4f349d48d2904e50fa&oe=5839AB13' required/><span>  </span>
        <button type="submit">Add</button>
      </form>
      </div>
    )
    } 
})

export default ProfileLikes;