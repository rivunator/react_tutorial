import React from "react";

import classes from "./Person.module.css";

const person = props => {
  const rnd = Math.random();

  if (rnd > 0.99) {
    throw new Error('Something went wrong');
  }
  return (
    <div className={classes.Person}>
      <p onClick={props.click}>
        Hi i am {props.name} and i'm {props.age} years old{" "}
      </p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default person;
