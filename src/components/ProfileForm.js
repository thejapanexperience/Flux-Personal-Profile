import React from 'react';

const ProfileForm = React.createClass({
  submitForm(e) {
    e.preventDefault();
    const { profileNameInput, profileAgeInput, profileProfessionInput, profileLocationInput, profileImageInput } = this.refs;

    let newProfile = {
      name: profileNameInput.value,
      age: profileAgeInput.value,
      location: profileLocationInput.value,
      profession: profileProfessionInput.value,
      url: profileImageInput.value,
      id: uuid()
    }

    this.props.addProfile(newProfile);
  },


  render() {

    return (
      <div className="container col-sm-12">
      <form className="form-group" onSubmit={this.submitForm}>
        <label htmlFor="profileNameInput">Name</label><span>  </span>
        <input ref='profileNameInput' type="text" defaultValue="Richard" required/> <span>  </span>
        <label htmlFor="profileAgeInput">Age</label><span>  </span>
        <input ref='profileAgeInput' type="number" defaultValue="35" required/><span>  </span> 
        <label htmlFor="profileLocationInput">Location</label><span>  </span>
        <input ref='profileLocationInput' type="text" defaultValue="San Francisco" required/><span>  </span>
        <label htmlFor="profileProfessionInput">Profession</label><span>  </span>
        <input ref='profileProfessionInput' type="text" defaultValue="Coder" required/><span>  </span>
        <label htmlFor="profileImageInput">Image URL</label><span>  </span>
        <input ref='profileImageInput' type="text" defaultValue='https://scontent.fsnc1-2.fna.fbcdn.net/t31.0-8/13914167_10157296068785080_5326184977193999563_o.jpg' required/><span>  </span>
        <button type="submit" >Add</button>
      </form>
      </div>
    )
    } 
})

export default ProfileForm;
