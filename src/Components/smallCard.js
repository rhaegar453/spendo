import React, { Component } from 'react';
import moneyIcon from '../Assets/dollar-sign.svg';

const smallCard = ({ interestRate, monthlyPayment, installments }) => {
    return (
        <div className="smallRectangle">
            <div>
                <div className="centeredCss">
                    <img src={moneyIcon} style={{ width: "80px" }} alt="Money Icon" className="dollarSign"></img>
                </div>
                <div className="centeredCss">
                    <div style={{ padding: '10px' }}>
                        <p className="textItem">Interest : <b>{interestRate}</b></p>
                        <p className="textItem">Monthly : <b>{monthlyPayment}</b></p>
                        <p className="textItem">Installments : <b>{installments}</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default smallCard;