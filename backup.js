import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Rivu", age: 28 },
      { name: "Max", age: 29 },
      { name: "Endel", age: 69 }
    ]
  };

  switchNameHandler = newName => {
    //console.log('i was clicked');
    //this.state.persons[0].name = "Rivunator";
    this.setState({
      persons: [
        { name: newName, age: 69 },
        { name: "Max", age: 29 },
        { name: "Endel", age: 69 }
      ]
    });
  };

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: "Rivo", age: 69 },
        { name: event.target.value, age: 29 },
        { name: "Endel", age: 69 }
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <h1> Hi i'm a React app </h1>
        <p>This is really working </p>
        <button onClick={() => this.switchNameHandler("Rivo Seim")}>
          Switch name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Rivunatorr!!")}
          changed={this.nameChangedHandler.bind(this)}
        >
          {" "}
          My hobbies: Racing{" "}
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
