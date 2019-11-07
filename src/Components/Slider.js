import React from 'react';
import Slider from 'react-rangeslider';
import {connect} from 'react-redux';
import {changeDuration, changeLoan} from '../Store/Actions';

import '../../node_modules/react-rangeslider/lib/index.css';

class SliderC extends React.Component{
    constructor(props){
        super(props);
        let {min, max}=this.props;
        this.state={
            rangeLabels:{
                [min]:min,
                [max]:max
            }, 
            value:null
        }
    }

    changeValueComplete=()=>{
        let {type}=this.props;
        if(type=='duration'){
            this.props.changeDuration({duration:this.state.value});
        }
        else{
            this.props.changeLoan({amount:this.state.value});
        }
    }

    changeSlider=(value)=>{
        this.setState({value});
    }


    render(){
        let {min, max, step}=this.props;
        return(
            <div>
                <Slider onChangeComplete={this.changeValueComplete} step={step} min={min} max={max} value={this.state.value} labels={this.state.rangeLabels} onChange={this.changeSlider}/>
            </div>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        amount:state.amount, 
        duration:state.duration
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        changeDuration:({duration})=>dispatch(changeDuration({duration})),
        changeLoan:({amount})=>dispatch(changeLoan({amount}))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(SliderC);