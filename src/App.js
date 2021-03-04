import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
const [ personsState, setPersonsState ] = useState({
  persons: [
{ name: 'Michal', age: 25 },
{ name: 'Luiza', age: 24 },
{ name: 'Odin', age: 1 }
  ], 
 });

 const[otherState, setOtherState]= useState('some other value');

 console.log(personsState, otherState);
 const switchNameHandler = (newName) => {
   //console.los('Was clicked!');
   //DON'T DO THIS: this.state.persons[0].name = "Michael";
   setPersonsState({
     persons: [
       {name:newName, age: 26},
       {name:'Luiza', age: 24},
       {name:'Odin', age: 2}
     ]
   });
 };

    return (
      <div className="App">
   <h1>Hi, I'm a React App</h1>
   <p>This is really working!</p>
   <button onClick={switchNameHandler.bind(this, 'Michaelos')}>Switch Name</button>
   <Person
      name={personsState.persons[0].name} 
      age={personsState.persons[0].age} />
   <Person
      name={personsState.persons[1].name} 
      age={personsState.persons[1].age} 
    click={switchNameHandler.bind(this, 'Michaelo')} >My Hobbies: Racing </Person>
   <Person
      name={personsState.persons[2].name} 
      age={personsState.persons[2].age} />
      </div>
    );
    //return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Does this work now?'))
  
}

export default app;
