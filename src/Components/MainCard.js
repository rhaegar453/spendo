import React from 'react';
import './style.css';
import SmallCard from './smallCard';
import Sliders from './Sliders';

export default class MainCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="centeredCss" >
                <div className="col-md-4 col-xs-4 col-sm-8 mainRectangle centeredCss">
                    <div>
                        <div style={{ marginTop: '10px' }}>
                            <h3 className="fontColor">Loan Amount</h3>
                            <Sliders min={500} max={5000} step={100} />
                        </div>
                        <div style={{ marginTop: '40px' }}>
                            <h3 className="fontColor">Duration</h3>
                            <Sliders min={6} max={12} step={1} />
                        </div>
                        <div className="centeredCss" style={{marginTop:"80px"}}>
                        <SmallCard/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}