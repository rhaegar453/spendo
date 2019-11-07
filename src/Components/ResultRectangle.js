import React, {Component} from 'react';
import './style.css';

const ResultRectangle=({interest, duration, montlyPayment,loanAmount})=>{
    return(
        <div className='resultRectangle'>
            <div style={{padding:'20px'}}>
                <p className="resultFont">Loan Amount: <b>{loanAmount}</b></p>
            <p className='resultFont'>Interest : <b>{interest}</b></p>
            <p className='resultFont'>Duration : <b>{duration}</b></p>
            <p className='resultFont'>Monthly Payment : <b>{montlyPayment} $</b></p>
            </div>
        </div>
    );
}


export default ResultRectangle;