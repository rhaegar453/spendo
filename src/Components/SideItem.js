import React , {Component} from 'react';
import '../App.css';


const SideItem=({loan, duration})=>{
    return(
        <div>
            <p className="smallItemFont">Loan <b>{loan}</b>$, Time: {duration} m</p>
            <div className="smallItemLine"></div>
        </div>
    );
}

export default SideItem;