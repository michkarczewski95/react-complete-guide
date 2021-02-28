import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
   <h1>Hi, I'm a React App</h1>
   <p>This is really working!</p>
   <Person name='Michal' age='26' />
   <Person name='Luiza' age='24' > My Hobbies: Racing</Person>
   <Person name='Odin' age='1' />
      </div>
    );
    //return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Does this work now?'))
  }
}

export default App;
