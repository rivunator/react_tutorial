import React, { Component } from "react";

import classes from "./Person.module.css";
import withClass from "../../../hoc/withClass";
import Auxillary from "../../../hoc/Auxillary";

class Person extends Component {
  render() {
    console.log('[Person.js] inside render()')
    return (
      <Auxillary classes={classes.Person}>
        <p onClick={this.props.click}>
          Hi i am {this.props.name} and i'm {this.props.age} years old{" "}
        </p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </Auxillary>
    );
    // return [
    //   <p key="1" onClick={this.props.click}> Hi i am {this.props.name} and i'm {this.props.age} years old{" "}</p>,
    //   <p key="2">{this.props.children}</p>,
    //   <input key="3" type="text" onChange={this.props.changed} value={this.props.name} />
    // ]
  }
};

export default withClass(Person, classes.Person);
