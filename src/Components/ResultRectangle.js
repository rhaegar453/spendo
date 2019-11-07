import React, {Component} from 'react';
import './style.css';

const ResultRectangle=({interest, duration, montlyPayment})=>{
    return(
        <div>
            <p>Interest : <b>{interest}</b></p>
            <p>Duration : <b>{duration}</b></p>
            <p>Monthly Payment : <b>{montlyPayment}</b></p>
        </div>
    );
}


export default ResultRectangle;