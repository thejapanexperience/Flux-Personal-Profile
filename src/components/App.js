import React from 'react';
import NameForm from './NameForm';
import NameList from './NameList';

const App = React.createClass({
  getInitialState() {
    return {
      names: []
    }
  },

  addName(newName) {
    const { names } = this.state;

    this.setState({
      names: [...names, newName]
    })
  },

  render() {
    const { names } = this.state;

    return (
      <div className='container'>
        <h1>Simple Name List</h1>
        <NameForm addName={this.addName} />
        <NameList names={names} />
      </div>
    )
  }
})

export default App;
