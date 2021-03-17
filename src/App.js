import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
state= {
  persons: [
{ name: 'Michal', age: 25 },
{ name: 'Luiza', age: 24 },
{ name: 'Odin', age: 1 }
  ], 
  otherState:'some other value',
  showPersons: false
 }

 switchNameHandler = (newName) => {
   //console.los('Was clicked!');
   //DON'T DO THIS: this.state.persons[0].name = "Michael";
   this.setState ({
     persons: [
       {name:newName, age: 26},
       {name:'Luiza', age: 24},
       {name:'Odin', age: 2}
     ]
   } )
 }
 nameChangedHandler= (event) => {
   this.setState( {
     persons:[
      {name:'Michal', age: 25},
      {name: event.target.value, age: 24},
      {name:'Odin', age: 1}
     ]
    })
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});

  }

render () {
const style= {
backgroundColor:'white',
font: 'inherit',
border:'1px solid blue' ,
padding:'8px',
cursor:'pointer'
};
let persons= null;
if(this.state.showPersons){
 persons =(
  <div>
  <Person
     name={this.state.persons[0].name} 
     age={this.state.persons[0].age} />
  <Person
     name={this.state.persons[1].name} 
     age={this.state.persons[1].age} 
   click={this.switchNameHandler.bind(this, 'Michaelo')} 
     changed={this.nameChangedHandler}>My Hobbies: Racing </Person>
  <Person
     name={this.state.persons[2].name} 
     age={this.state.persons[2].age} />
     </div>

 ) ;
}
  
    return (
      <div className="App">
   <h1>Hi, I'm a React App</h1>
   <p>This is really working!</p>
   <button 
   style={style}
   onClick={this.togglePersonsHandler}>Toggle Persons </button>
   {persons}
   
    

      </div>
    );
    //return React.createElement('div',{className:'App'}, React.createElement('h1',null, 'Does this work now?'))
  
}}

export default App;
