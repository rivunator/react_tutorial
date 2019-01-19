import React from 'react';
import classes from './Cockpit.module.css';
import Auxillary from '../../hoc/Auxillary'

const cockpit = (props) => {

    const assignedClasses = [];

    let btnClass = classes.Button;

    if (props.showPerson) {
        btnClass = [classes.Button, classes.Red].join(' ');
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red)
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <>
            <h1>{props.appTitle}</h1>
            <p className={assignedClasses.join(' ')}>is really working </p>
            <button className={btnClass} onClick={props.clicked}>
                Toggle Persons
        </button>
        </>
    )
};

export default cockpit;