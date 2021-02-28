import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
 state = {
  persons: [
{ name: 'Michal', age: 25 },
{ name: 'Luiza', age: 24 },
{name: 'Odin', age: 1 }
  ], 
  otherState:'some othe value'
 }
switchNameHandler= () => {
//console.log('Was clicked!');
// DON'T DO THIS:this.state.persons[0].name='Michael';
this.setState({
  persons: [
  { name: 'Michael', age: 25 },
  { name: 'Luiza', age: 24 },
  { name: 'Odin', age: 30 }
]
 })
}



  render() {
    return (
      <div className="App">
   <h1>Hi, I'm a React App</h1>
   <p>This is really working!</p>
   <button onClick={this.switchNameHandler}>Switch Name</button>
   <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
   <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
   <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    //return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Does this work now?'))
  }
}

export default App;
