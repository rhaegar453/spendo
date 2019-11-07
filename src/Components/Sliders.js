import React from 'react';
import Slider from './Slider';

class Sliders extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="centeredCss" >
                <div style={{width:'200px'}}>
                    <div style={{ marginTop:'20px' }}>
                        <h5 className="centeredCss">
                            Loan Amount ($)
                        </h5>
                        <Slider min={500} max={5000} step={1000} type="loan" />
                    </div>
                    <div style={{ marginTop:'80px' }}>
                        <h5 className="centeredCss">
                            Duration (Months)
                        </h5>
                        <Slider min={6} max={12} step={1} type="duration" />
                    </div>
                </div>
            </div>

        );
    }
}

export default Sliders;