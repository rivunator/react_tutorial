import React, { Component } from "react";

import classes from "./Person.module.css";

class Person extends Component {
  render() {
    console.log('[Person.js] inside render()')
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          Hi i am {this.props.name} and i'm {this.props.age} years old{" "}
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    );
    // return [
    //   <p key="1" onClick={this.props.click}> Hi i am {this.props.name} and i'm {this.props.age} years old{" "}</p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
    // ]
  }
};

export default Person;
